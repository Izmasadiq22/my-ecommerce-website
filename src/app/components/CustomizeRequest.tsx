import React from 'react'

const CustomizeRequest = () => {
  return (
    <section className='bg-gradient-to-r from-black to bg-neutral-700 py-10'>
        <div className='container mx-auto text-center'>
            <h2 className='text-3xl font-extrabold mb-6 text-white'>Your Vision, Our Craft</h2>
            <form className='max-w-md mx-auto'>
                <div className='mb-4 text-white'>
                    <input
                    type="text"
                    placeholder='Your Name'
                    className='w-full p-3 border border-grey-300 rounded-md'
                    required/>
                </div>

                <div className='mb-4'>
                    <input
                    type="email"
                    placeholder='Your Email'
                    className='w-full p-3 border border-grey-300 rounded-md'
                    required/>
                </div>


                <div className='mb-4'>
                    <input
                    type="occasion"
                    placeholder="Specify the occasion (e.g., birthday, wedding)"
                    className='w-full p-3 border border-grey-300 rounded-md'
                    required/>
                </div>

                <div className='mb-4'>
                    <input
                    type="custom request details"
                    placeholder="Describe your custom card or letter design"
                    className='w-full p-3 border border-grey-300 rounded-md'
                    required/>
                </div>
                
                <div className='mb-4'>
                    <input
                    type="date"
                    placeholder= "Select the date you need it by"
                    className='w-full p-3 border border-grey-300 rounded-md'
                    required/>
                </div>

                <div className='mb-4'>
                    <button className='bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-900'>
                    Place Your Order
                    </button>
                </div>
                
                

                


            </form>

        </div>
    </section>
  )
}

export default CustomizeRequest