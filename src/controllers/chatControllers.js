const chatControllers = {

    async listar(req, res) {

  
        //try if do erro
        try {
            res.send("ola chat")
        } catch (err) {
          console.error(err);
          return res.status(500).json({ error: "Erro do Servidor Interno" });
        }
      },
      async perqunta(req, res) {

  
        //try if do erro
        try {
           
       const msg=req.query.perqunta
            res.send("Você perguntou?" + msg)
        } catch (err) {
          console.error(err);
          return res.status(500).json({ error: "Erro do Servidor Interno" });
        }
      },

      async mensagem(req, res) {

  
        //try if do erro
        try {
           
 const msg=req.params.tipo;
 const cod = req.params.id
            res.send("você quer editar o id#" + cod)
        } catch (err) {
          console.error(err);
          return res.status(500).json({ error: "Erro do Servidor Interno" });
        }
      },
      async pedido(req, res) {

  
        //try if do erro
        try {
            const {produto,quantidade,tipodePagamento,bebida} =req.body  
const pedido={
    produto,quantidade,tipodePagamento,bebida
}

       console.log(pedido)    

            res.json(pedido)
        } catch (err) {
          console.error(err);
          return res.status(500).json({ error: "Erro do Servidor Interno" });
        }
      },
}
module.exports = chatControllers;