import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { Product } from "../app/models/product";
import { useState } from "react";
import { useEffect } from "react";
import agent from "../app/api/agent";

import axios from "axios";
import NotFound from "../app/errors/NotFound";
import LoadingComponent from "../app/layout/LoadingComponent";

export default function ProductDetails() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        agent.Catalog.details(parseInt(id))
            //axios.get(`http://localhost:5116/api/products/${id}`)
            .then(response => setProduct(response))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [id])

    if (loading) return <LoadingComponent message='Loading product...' />
    if (!product) return <NotFound />
    return (
        <Grid container spacing={6}>
            <Grid item xs={6}>
                <img src={product.pictureUrl} alt={product.name} style={{ width: '100%' }} />
            </Grid>

            <Grid item xs={6}>
                <Typography variant='h3' > {product.name} xxxxx </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant='h4' > ${(product.price / 100).toFixed(2)}  </Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{product.name}</TableCell>

                            </TableRow>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{product.description}</TableCell>

                            </TableRow>
                            <TableRow>
                                <TableCell>Type</TableCell>
                                <TableCell>{product.type}</TableCell>

                            </TableRow>
                            <TableRow>
                                <TableCell>Brand</TableCell>
                                <TableCell>{product.brand}</TableCell>

                            </TableRow>
                            <TableRow>
                                <TableCell>Quantity in stock</TableCell>
                                <TableCell>{product.quantityInStock}</TableCell>

                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

        </Grid>
    )
}