

function Sectiontitle({heading,subheading}) {
    return (
        <div className="mx-auto text-center md:w-3/12">
            <h1 className="text-4xl font-bold uppercase py-4">{heading}</h1>
            <p className=" py-4">{subheading}</p>
            
        </div>
    )
}

export default Sectiontitle;
