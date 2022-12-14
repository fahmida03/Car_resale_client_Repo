import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false)

    const [isSellerLoading, setIsSellerLoadig] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`https://resale-portal-server-fahmida03.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsSeller(data.isSeller)
                    setIsSellerLoadig(false)
                })
        }
    }, [email])
    return [isSeller, isSellerLoading]
}

export default useSeller;