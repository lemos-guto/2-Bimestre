export const buscarUsuarios = (req, res) => {
    const query = "SELECT * FROM Usuario";
    db.query(query, (error, data ) =>{
        if (error) return res.json(error);
        return res.json(data).status(200);
    })};