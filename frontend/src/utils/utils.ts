export interface menuType {
    itemNumber: number
    price: number
    title: string
    image?: string
}

export const DEFAULT_IMAGE: string = "https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=";

export const DEFAULT_ANIMATIONS = {
    initial: {
        x: '-100%', opacity: 0
    },
    whileInView: {
        x: 0, opacity: 1
    }
}

