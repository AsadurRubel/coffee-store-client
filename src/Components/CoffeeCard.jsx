import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, photo } = coffee;
    console.log(coffee)

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deleteCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });

                        }
                        const remaining = coffees.filter(cof => cof._id !== _id);
                        setCoffees(remaining)
                    })


            }
        });
    }




    return (
        <div className="card card-side bg-base-100 shadow-xl mb-4">
            <figure><img className="w-full" src={photo} alt="Movie" /></figure>
            <div className="card-body  items-center flex-row">
                <div>
                    <p className="text-2xl font-bold">{name}</p>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                        <button className="btn join-item">View</button>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn join-item">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn join-item ">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
CoffeeCard.propTypes = {
    coffee: PropTypes.node,
    coffees: PropTypes.node,
    setCoffees: PropTypes.node,
}
export default CoffeeCard;