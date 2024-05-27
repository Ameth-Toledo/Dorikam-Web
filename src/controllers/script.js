import Shoe from "../models/Shoe.js";
import { bst } from "./dependencies.js";

let btn = document.getElementById("shoe-btn");
let searchBtn = document.getElementById("search-btn");
let minBtn = document.getElementById("min-btn");
let maxBtn = document.getElementById("max-btn");

btn.addEventListener("click", () => {
    let marcaShoe = document.getElementById("marcaShoe").value;
    let tallaShoe = document.getElementById("tallaShoe").value;
    let idShoe = document.getElementById("idShoe").value;
    let colorShoe = document.getElementById("colorShoe").value;
    let fechaShoe = document.getElementById("fechaShoe").value;
    let cantidadShoe = document.getElementById("cantidadShoe").value;

    if (marcaShoe && tallaShoe && idShoe && colorShoe && fechaShoe && cantidadShoe) {
        let shoe = new Shoe(marcaShoe, tallaShoe, idShoe, colorShoe, fechaShoe, cantidadShoe);
        let data = bst.add(shoe);
        console.log(data);
        if (data) {
            Swal.fire({
                icon: "success",
                title: "Exito...",
                text: "Producto agregado correctamente",
              });
        } else { Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El producto ya existe",
          });
        }
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor, complete todos los campos",
          });
    }
});

searchBtn.addEventListener("click", () => {
    let idBuscar = document.getElementById("buscar").value;

    if (idBuscar) {
        let shoeNode = bst.search(idBuscar);

        if (shoeNode) {
            displayDataInTable([shoeNode.value]);
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "El producto no existe",
              });
        }
    } else {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Por favor, ingrese un ID para buscar",
          });
    }
});

minBtn.addEventListener("click", () => {
    let minNode = bst.min();
    if (minNode) {
        Swal.fire("Valor mínimo encontrado", `Cantidad mínima de pares: ${minNode.value.cantidadShoe}`);
    } else {
        Swal.fire("El árbol está vacío");
    }
});

maxBtn.addEventListener("click", () => {
    let maxNode = bst.max();
    if (maxNode) {
        Swal.fire("Valor máximo encontrado", `Cantidad máxima de pares: ${maxNode.value.cantidadShoe}`);
    } else {
        Swal.fire("El árbol está vacío");
    }
});

function displayDataInTable(data) {
    let tbody = document.querySelector("table tbody");
    tbody.innerHTML = "";
    data.forEach(shoe => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${shoe.marcaShoe}</td>
            <td>${shoe.tallaShoe}</td>
            <td>${shoe.idShoe}</td>
            <td>${shoe.colorShoe}</td>
            <td>${shoe.fechaShoe}</td>
        `;
        tbody.appendChild(row);
    });
}
