import t1 from './images/tour-1.jpeg'
import t2 from './images/tour-2.jpeg'
import t3 from './images/tour-3.jpeg'
import t4 from './images/tour-4.jpeg'
export const pageLinks =[
    {id:1,
    href:'#home',
    text:'home'},
    {id:2,
    href:'#about',
    text:'about'},
    {id:3,
    href:'#services',
    text:'services'},
    {id:4,
    href:'#tours',
    text:'tours'},
]

export const socialLinks = [
    {id:1, href:"https://www.twitter.com", icon:'fab fa-twitter'},
    {id:2, href:"https://www.facebook.com", icon:'fab fa-facebook'},
    {id:3, href:"https://www.instagram.com", icon:'fab fa-instagram'}
]

export const services =[
    {id:1, icon:'fas fa-wallet fa-fw', title:'saving money', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id:2, icon:'fas fa-mountain fa-fw', title:'endless hiking', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id:3, icon:'fas fa-home fa-fw', title:'amazing comfort', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'}
]

export const tours=[
    {id:1, image:t1, date:'august 26th, 2020', title:'Tibet Adventure', info:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location:'china', duration:'6 days', cost:'from $2100'},
    {id:2, image:t2, date:'october 20th, 2020', title:'best of java', info:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location:'indonasia', duration:'8 days', cost:'from $1500'},
    {id:3, image:t3, date:'january 21st, 2021', title:'explore hong kong', info:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location:'hong kong', duration:'10 days', cost:'from $4100'},
    {id:4, image:t4, date:'december 3rd, 2020', title:'kenya highlights', info:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location:'kenya', duration:'7 days', cost:'from $3200'},
]