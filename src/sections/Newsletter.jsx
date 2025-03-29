import { motion } from 'motion/react'
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";


const Newsletter = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "secret" });
      cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])



  return (
    <motion.section
      initial={{ opacity: 0, y: 20, }}
      whileInView={{ opacity: 1, y: 0, }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      id='news-letter' aria-labelledby='news-letter' className='flex flex-col justify-center items-center py-16 '>
      <motion.h1 initial={{ opacity: 0, y: 20, }}
        whileInView={{ opacity: 1, y: 0, }}
        transition={{ duration: 0.5, ease: "easeInOut" }} className='text-3xl font-medium tracking-wider leading-6'>Join Cash4Cars</motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20, }}
        whileInView={{ opacity: 1, y: 0, }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className='text-sm font-normal mt-4'>Receive pricing updates, shopping tips & more!</motion.p>

      <div className='mt-4 w-full'>
        <Cal namespace="secret"
          calLink="aasif-ali-leqz6a/secret"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ "layout": "month_view" }}
        />
      </div>
    </motion.section>
  )
}

export default Newsletter