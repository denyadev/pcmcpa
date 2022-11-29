import { motion } from 'framer-motion'

function Services() {
  return (
    <>
        <div className="lg:h-screen lg:grid grid-rows-2 grid-cols-2">
            {/* Left*/}
            <div className="row-span-2 bg-servicemain bg-contain bg-bottom lg:bg-cover bg-no-repeat md:bg-bottom flex items-center justify-center">
                {/* xl:mb-[26em] */}
                <div className="pb-48 pt-24 md:pb-96 md:pt-44 lg:mb-[16em] w-[350px] md:w-[530px] lg:w-[600px]"> 
                    <h1 className="text-xl md:text-3xl lg:text-2xl text-theme font-semibold md:font-medium text-center">Accounting & Bookkeeping</h1>
                    <ul className="list-disc mx-12 mt-6 text-sm md:text-lg font-normal leading-7">
                        <li>Set up a personalized accounting system for your business.</li>
                        <li>Compilation engagement financial statements.</li>
                        <li>Regular update of your bookkeeping and accounts.</li>
                        <li>Year end accounts reconciliation and review.</li>
                    </ul>
                </div>
            </div>

            {/* Right Top*/}
            <div className="row-span-1 bg-servicesq bg-cover bg-bottom flex items-center justify-center">
                <div className="py-24 md:py-44 md:w-[530px] w-[350px] lg:w-[450px]">
                    <h1 className="text-xl md:text-3xl lg:text-2xl font-semibold md:font-medium text-center">Tax</h1>
                    <ul className="list-disc mx-12 mt-6 text-sm md:text-lg font-normal leading-7">
                        <li>Personal T1 Tax Returns.</li>
                        <li>Corporate T2 Tax Returns.</li>
                        <li>GST/HST Filings.</li>
                        <li>WSIB/EHT Employer Filings.</li>
                        <li>GST Rebates.</li>
                        <li>Tax Planning and Optimization.</li>
                    </ul>
                </div>
            </div>
            {/* Right Bottom*/}
            <div className="row-span-1 bg-servicebr2 bg-cover bg-center">
                <div className="bg-black/80 text-white h-full w-full flex items-center justify-center">
                    <div className="py-24 md:py-44 md:w-[530px] w-[350px] lg:w-[450px]">
                        <h1 className="text-xl md:text-3xl lg:text-2xl font-semibold md:font-medium text-center">Payroll & Compliance </h1>
                        <ul className="list-disc mx-12 mt-6 text-sm md:text-lg font-normal leading-7">
                            <li>Employee payroll for small business.</li>
                            <li>Year tax slip preparation.</li>
                            <li>Remuneration planning.</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Services