import { app } from "./app";
import getCompras from "./endpoints/getCompras";
import getProdutos from "./endpoints/getProdutos";
import getUsuarios from "./endpoints/getUsuarios";
import postCompra from "./endpoints/postCompra";
import postProduto from "./endpoints/postProduto";
import postUsuario from "./endpoints/postUsuario";

app.get("/users", getUsuarios)
app.post("/users", postUsuario)
app.get("/products", getProdutos)
app.post("/products", postProduto)
app.get("/users/:user_id/purchases", getCompras)
app.post("/purchases", postCompra)