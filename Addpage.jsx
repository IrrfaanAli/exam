



const AddToy = () => {
   
     const handleAddpage = event =>{
        event.preventDefault();

        const form = event.target;

        const title = form.name.value;
        const price = form.price.value;
        
        const newpro = {title,price}
       
     

      fetch('https://dummyjson.com/products/product',{
         method : 'POST',
         headers : {
            'content-type': 'application/json'
         },
         body : JSON.stringify(newpro)

      })
      .then(res => res.json())
      .then(data => {
       // console.log(data)
        
        }
      )

     }
    return (
        <div>
             
             <div >
                     <form onSubmit={handleAddpage}>
                        <div >
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Toy Name" name="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller name</span>
                                    </label>
                                    <input type="text" placeholder="price" name="price" className="input input-bordered" />
                                </div>
                               
                                                         
                                <div className="form-control">
                                    <button type="submit" >Add Toy</button>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                    <Footer></Footer>
        </div>
    );
};

export default AddToy;