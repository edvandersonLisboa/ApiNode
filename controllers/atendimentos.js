const Atendimento = require('../models/atendimentos');

module.exports = app =>{

    app.get('/atendimentos',(req, res)=>{
        
        Atendimento.lista( res);
    });
    app.get('/atendimentos/:id',(req,res)=>{
        const id  = parseInt(req.params.id);
        Atendimento.buscarPorId(id,res);
    })
    //req ->envia dados
    app.post('/atendimentos', (req, res) =>{
        //adicinado novo atendimento no banco
        const atendimento = req.body;
        Atendimento.adiciona(atendimento, res);
      
    })

    //alterar um valor
    app.patch('/atendimentos/:id', (req, res) =>{
        //adicinado novo atendimento no banco
        const id = parseInt(req.params.id);
        const valores = req.body
        const atendimento = req.body;
        Atendimento.altera(id,valores, res); 

      
    })

    app.delete('/atendimentos/:id',(req,res)=>{
        const id = parseInt(req.params.id);

        Atendimento.deleta(id,res);
    })

}