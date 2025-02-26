class Aluno {
    constructor(nome, nota) {
        this.nome = nome
        this.nota = nota
    }
}

class SaladeAluno {
    constructor() {
       this.alunos = [];
    }

    // Função para adicionar aluno
    addAluno(nome, nota) {
        this.alunos.push(new Aluno(nome, nota))
    }

    // Filtrar alunos que estão acima da média
    filterAprovados() {
        return this.alunos.filter(aluno => aluno.nota >= 6);
    }

}

const sala = new SaladeAluno();

// Adicionando alunos a turma
sala.addAluno("Paulo", 8);
sala.addAluno("Maria", 9);
sala.addAluno("Carlos", 5);
sala.addAluno("Mirian", 6);
sala.addAluno("Diego", 4);

// Mostra o resultados da função
const alunosAprovados = sala.filterAprovados();
console.log(alunosAprovados)
