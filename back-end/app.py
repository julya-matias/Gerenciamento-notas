import json
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///notas.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Nota(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    aluno_nome = db.Column(db.String(100), nullable=False)
    nota = db.Column(db.Text, nullable=False)  
    frequencia = db.Column(db.Float, nullable=False)

    def __repr__(self):
        return f'<Nota {self.aluno_nome} - {self.nota} - Frequência {self.frequencia}%>'

@app.route('/adicionar_nota', methods=['POST'])
def adicionar_nota():
    try:
        data = request.get_json()
        aluno_nome = data['aluno_nome']
        notas = json.dumps(data['nota'])
        frequencia = data['frequencia']

        nova_nota = Nota(aluno_nome=aluno_nome, nota=notas, frequencia=frequencia)
        db.session.add(nova_nota)
        db.session.commit()

        return jsonify({'message': 'Nota adicionada com sucesso!'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/alunos', methods=['GET'])
def get_alunos():
    alunos = Nota.query.all()
    return jsonify([{
        'aluno_nome': aluno.aluno_nome,
        'nota': json.loads(aluno.nota),
        'frequencia': aluno.frequencia
    } for aluno in alunos])

@app.route('/apagar_registros', methods=['DELETE'])
def apagar_registros():
    try:
        Nota.query.delete()
        db.session.commit()
        return jsonify({'message': 'Todos os registros foram apagados com sucesso!'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, host='0.0.0.0')
