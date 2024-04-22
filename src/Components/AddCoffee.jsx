
import Swal from 'sweetalert2';


const AddCoffee = () => {

    const handleAddCoffee = event =>{
        event.preventDefault();
        const form = event.target

        const name = form.name.value
        const quantity = form.quantity .value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const newCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(newCoffee)

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Back'
                  })
                  
            }
        })

    }



    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-bold text-center mb-10">Add New Coffee</h2>
            <div>
                <form onSubmit={handleAddCoffee}>
                    <div className="flex gap-10 mb-5  justify-center">
                        <div className="flex flex-col">
                            <label>Coffee Name</label>
                            <div className="join">
                                <input className="input input-bordered join-item" type="text" name="name" placeholder="Coffee Name" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label>Quantity</label>
                            <div className="join">

                                <input className="input input-bordered join-item" type="text"
                                    name="quantity"
                                    placeholder="Available Quantity" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-10 mb-5  justify-center">
                        <div className="flex flex-col">
                            <label>Supplier</label>
                            <div className="join">
                                <input className="input input-bordered join-item" type="text" name="supplier" placeholder="Cappu Authorizer" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label>Taste</label>
                            <div className="join">

                                <input className="input input-bordered join-item" type="text"
                                    name="taste"
                                    placeholder="Sweet and hot" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-10 mb-5  justify-center">
                        <div className="flex flex-col">
                            <label>Category</label>
                            <div className="join">
                                <input className="input input-bordered join-item" type="text" name="category" placeholder="Americano" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label>Details</label>
                            <div className="join">

                                <input className="input input-bordered join-item" type="text"
                                    name="details"
                                    placeholder="Espresso with hot water" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-10 mb-5  justify-center">
                        <div className="flex flex-col">
                            <label>Photo</label>
                            <div className="join">
                                <input className="input input-bordered join-item" type="text" name="photo" placeholder="PhotoURL" />
                            </div>
                        </div>
                        <div>
                        <button className="btn btn-primary">Add Coffee</button>
                        </div>
                    </div>
                  
               </form>
            </div>
        </div>
    );
};

export default AddCoffee;