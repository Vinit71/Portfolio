function Footer() {
  return (
    <div className='mx-4 sm:mx-8 md:mx-12 my-8 flex flex-col gap-7 py-10'>
        <hr />
        <div className="flex flex-col sm:flex-row justify-between text-base sm:text-lg">
            <p className="text-center max-w-full sm:max-w-md mb-4 sm:mb-0">Focused on providing practical solutions and maintaining high standards in every project.</p>
            
            <div className="flex justify-between mx-10 sm:flex-row sm:justify-between gap-4 sm:gap-8 md:gap-12 mb-4 sm:mb-0">
              <p className="">Terms and Services</p>
              <p className="">Contact me</p>
            </div>

        </div>
    </div>

  )
}

export default Footer
