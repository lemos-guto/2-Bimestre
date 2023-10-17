import express from "express";

const rotas = express.Router();
rotas.get("/", (req, res) => {res.send(`Avião sem asa
<br>Fogueira sem brasa
<br>Sou eu assim sem você
<br>Futebol sem bola
<br>Piu-Piu sem Frajola
<br>Sou eu assim sem você
<br>
<br>Por que é que tem que ser assim
<br>Se o meu desejo não tem fim?
<br>Eu te quero a todo instante
<br>Nem mil alto-falantes
<br>Vão poder falar por mim
<br>
<br>Amor sem beijinho
<br>Buchecha sem Claudinho
<br>Sou eu assim sem você
<br>Circo sem palhaço
<br>Namoro sem abraço
<br>Sou eu assim sem você
<br>
<br>Tô louco pra te ver chegar
<br>Tô louco pra te ter nas mãos
<br>Deitar no teu abraço
<br>Retomar o pedaço
<br>Que falta no meu coração
<br>
<br>Eu não existo longe de você
<br>E a solidão é o meu pior castigo
<br>Eu conto as horas pra poder te ver
<br>Mas o relógio tá de mal comigo
<br>
<br>Eu não existo longe de você
<br>E a solidão é o meu pior castigo
<br>Eu conto as horas pra poder te ver
<br>Mas o relógio tá de mal comigo
<br>Por quê? Por quê?
<br>
<br>Neném sem chupeta
<br>Romeu sem Julieta
<br>Sou eu assim sem você
<br>Carro sem estrada
<br>Queijo sem goiabada
<br>Sou eu assim sem você, você
<br>
<br>Por que é que tem que ser assim
<br>Se o meu desejo não tem fim?
<br>Eu te quero a todo instante
<br>Nem mil alto-falantes
<br>Vão poder falar por mim
<br>
<br>Eu não existo longe de você
<br>E a solidão é o meu pior castigo
<br>Eu conto as horas pra poder te ver
<br>Mas o relógio tá de mal comigo
<br>
<br>Eu não existo longe de você
<br>E a solidão é o meu pior castigo
<br>Eu conto as horas pra poder te ver
<br>Mas o relógio tá de mal comigo
<br>Por quê, neném? Por quê?
<br>
<br>(Iê, iê)
<br>Eu não existo longe de você
<br>E a solidão é o meu pior castigo
<br>Eu conto as horas pra poder te ver
<br>Mas o relógio tá de mal comigo
<br>
<br>Eu não existo longe de você
<br>E a solidão é o meu pior castigo
<br>Eu conto as horas pra poder te ver
<br>Mas o relógio tá de mal comigo
<br>Por quê? Por quê?`)});

rotas.put("/:id", (req, res) => {
    const valores = [
        req.body.nome,
        req.params.id
    ]
    return res.status(200).json(valores);
})
rotas.post("/", (req, res) => {
    const valores = [
        req.body.nome,
        req.body.email
    ]
    return res.status(200).json(valores);

})
rotas.delete("/:id", (req, res) => {
    const id = req.params.id;
    return res.status(200).json(id);
    })

export default rotas;