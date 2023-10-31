import React, { Component } from 'react'
import axios from 'axios'
import Produit from './Produit.jsx'
export default class ListProduits extends Component {
    state = {
        categorie: [], selectedcategorie: 0, produits: []
    }

    render() {
        return (
            <div>
                <select name="selecteCategorie" id="selectedCategorie" value={this.state.selectedcategorie} onChange={(e) => this.setState({ selectedcategorie: e.target.value })}>
                    <option value="0">Tous Les Produits</option>
                    {
                        this.state.categorie.map(
                            (c) => <option value={c.id}> {c.name} </option>)}
                </select>
                <div>
                    {
                        this.state.produits.map((p) =>
                            <Produit key={p.id} produit={p} />)
                    }
                </div>
            </div>
        )
    }
    componentDidMount() {
        const getData = async () => {
            const res = await axios.get("https://api.escuelajs.co/api/v1/categories");
            return res.data;
        }
        getData().then(categorie => this.setState({ categorie }))
    }
    // componentDidUpdate(prevprops, prevstate) {
    //     if (prevstate.selectedcategorie !== this.state.selectedcategorie) {
    //         const getData = async () => {
    //             let res;
    //             if (this.state.selectedcategorie === 0) {
    //                 res = await axios.get("https://api.escuelajs.co/api/v1/products");
    //                 return res.data;
    //             }
    //             getData().then(produits => this.setState({ produits }))
    //         }
    //     }

    // }
    componentDidUpdate(prevprops, prevstate) {
        if (this.prevstate !== this.state.selectedcategorie) {
            const getData = async () => {
                let res
                if (this.state.selectedcategorie === 0) {
                    res = await axios.get("https://api.escuelajs.co/api/v1/products")
                }
                else{
                    res = await axios.get(`https://api.escuelajs.co/api/v1/categories/${this.state.selectedcategorie}/products`)
                }
                return res.data;
            }
getData().then(produits=>this.setState({produits}));
        }
    }
}