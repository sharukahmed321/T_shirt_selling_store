import {API} from "../../backend";

//this is for create category calls which can talk to backend
export const createCategory = (userId, token, category) => {
    return fetch (`${API}/category/create/${userId}` ,{
        method : "POST",
        headers:{
        Accept : "application/json",
        "Content-Type" : "application/json",
        Authorization: `Bearer ${token}`
        },
        body : JSON.stringify(category)
    }
    
    ).then(response => {
        return response.json()
    })
    .catch(err => console.log(err));
};

//delete a category  which can talk to backend
export  const deleteCategory = (userId , token ,categoryId) => {
    return fetch(`${API}/category/${categoryId}/${userId}` , {
        method: "DELETE",
        headers: {
        Accept : "application/json",
        Authorization: `Bearer ${token}`
        }
        
    }).then(response => {
        return response.json()
        
    }).catch(err => console.log(err));
};

//get a single product  which can talk to backend
export const getCategory = categoryId => {
    return fetch(`${API}/category/${categoryId}` ,{
        method:"GET"
    }).then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

//update a category which can talk to backend
export  const updateCategory = (categoryId ,userId , token , category) => {
    return fetch(`${API}/category/${categoryId}/${userId}` , {
        method: "PUT",
        headers: {
            Accept : "application/json",
        Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({category})
    }).then(response => {
        return response.json()
        
    }).catch(err => console.log(err));
};


//get all categories calls which can tak to backend
export const getCategories = () => {
    return fetch(`${API}/categories` , {
        method:"GET"
    }).then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

//this is for create a product calls which can talk to backend
export  const createaProduct = (userId , token , product) => {
    return fetch(`${API}/product/create/${userId}` , {
        method: "POST",
        headers: {
            Accept : "application/json",
        Authorization: `Bearer ${token}`
        },
        body: product
    }).then(response => {
        return response.json()
        
    }).catch(err => console.log(err));
};

//get all products which can talk to backend
export const getProducts = () => {
    return fetch(`${API}/products` , {
        method:"GET"
    }).then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

//delete a product  which can talk to backend
export  const deleteProduct = (productId, userId , token ) => {
    return fetch(`${API}/product/${productId}/${userId}` , {
        method: "DELETE",
        headers: {
        Accept : "application/json",
        Authorization: `Bearer ${token}`
        }
        
    }).then(response => {
        return response.json()
        
    }).catch(err => console.log(err));
};

//get a single product  which can talk to backend
export const getProduct = productId => {
    return fetch(`${API}/product/${productId}` ,{
        method:"GET"
    }).then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};


//update a product which can takl to backend
export  const updateProduct = (productId ,userId , token , product) => {
    return fetch(`${API}/product/${productId}/${userId}` , {
        method: "PUT",
        headers: {
            Accept : "application/json",
        Authorization: `Bearer ${token}`
        },
        body: product
    }).then(response => {
        return response.json()
        
    }).catch(err => console.log(err));
};