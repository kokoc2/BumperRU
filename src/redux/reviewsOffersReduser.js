
let tempReviewsOffers = {
    MessageAddOffers : [
        {id:1, text:'Хочу бампер на калину'},
        {id:2, text:'Ты красив, но чуть похож на обезьяну'},
        {id:3, text:'Класссссс, все понравилость'},
    ],
    MessageAddOffersTemp:'uuu',
}


const ReviewsOffersReduser=(state = tempReviewsOffers, action)=>{
    switch(action.type){
        case 'addReviewsOffers':
            let MessageAddOffers = {
                id: 5, 
                text: state.MessageAddOffersTemp,
            }
            state.MessageAddOffers.push(MessageAddOffers);
            state.MessageAddOffers = ''
            return state;    

        case 'MessageAddOffersTemp':
            state.MessageAddOffersTemp = action.tempText;
            return state;

        default:
            return state;
    }
}

export const addReviewsOffersCreator=()=>{
    return ({ type: 'addReviewsOffers'})
}
export const addReviewsOffersTempCreator=(tempText)=>{
    return ({ type: 'addReviewsOffersTemp', tempText : tempText})
}

export default ReviewsOffersReduser;