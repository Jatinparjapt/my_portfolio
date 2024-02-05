import React from 'react'
import Head from 'next/head'
const Privacy = () => {
  return (
    <>
    <Head>
        <title>Privacy Policy Page</title>
      </Head>
      <div class="flex flex-wrap -m-4 mt-20 ">
      <div class=" flex justify-center ml-20 p-4 md:w-[80%] w-full">
        <div class="h-full bg-gray-100 p-8 rounded">
        <h1 className='text-2xl text-sky-500 mb-3' ><b> Privacy Policy</b></h1> 
          <p class="leading-relaxed mb-6">Our privacy policy is straightforward: we respect your privacy. Any information you share with us is treated with utmost confidentiality. We collect only necessary data for the intended purpose and do not sell or share it with third parties. Your trust is paramount, and we employ robust security measures to safeguard your information. We may use cookies for a better user experience but ensure they are non-intrusive. You have the right to access, correct, or delete your data. By using our services, you agree to this policy. Transparency and user control are our priorities in preserving your privacy.</p>
          
        </div>
      </div>
     
    </div>
    </>
  )
}

export default Privacy