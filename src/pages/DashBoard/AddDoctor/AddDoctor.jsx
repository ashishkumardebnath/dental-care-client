import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const ImageHostKey = 'b33c49300301db539f4067e42e466e67'

    const navigate = useNavigate()

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty')
            const data = await res.json()
            return data;
        }
    })

    const handleAddDoctor = (data) => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)

        const url = `https://api.imgbb.com/1/upload?key=${ImageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }

                    // save doctor infomation to the database 
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.name} doctor added successfully`)
                            navigate('/dashboard/managedoctor')
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="w-96 p-7">
            <h1 className="text-2xl font-semibold">Add a new  Doctor</h1>

            <form onSubmit={handleSubmit(handleAddDoctor)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input type="text"
                        {...register("name", {
                            required: 'Name is required.'
                        })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input type="email"
                        {...register("email", {
                            required: "Email Address is required"
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Specialty</span></label>
                    <select
                        {...register("specialty", {
                            required: "Specialty is required"
                        })}
                        className="select select-bordered w-full max-w-xs">
                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Photo</span></label>
                    <input type="file"
                        {...register("image", {
                            required: "Photo is required"
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.image && <p className="text-red-600">{errors.image?.message}</p>}
                </div>

                <input className="btn btn-accent w-full mt-5" type="submit" value="Add Doctor" />

            </form>
        </div>
    );
};

export default AddDoctor;