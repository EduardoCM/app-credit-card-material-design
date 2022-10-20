const { TextField, Button, makeStyles } = require("@material-ui/core")
const { useState } = require("react")



const useStyles = makeStyles(theme => ({

    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        padding: theme.spacing(5)
    }

}));


const RegistroTarjeta = ({ handleClose }) => {

    const classes = useStyles();

    const [cardHolderName, setCardHolderName] = useState('');
    const [creditCardNumber, setCreditCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [paymentNetworks, setPaymentNetworks] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Card Holder Name: " + cardHolderName);
        console.log("Credit Card Number: " + creditCardNumber);
        console.log("CVV: " + cvv);
        console.log("Expiration Date: " + expirationDate);
        console.log("Payment Networks: " + paymentNetworks);


        fetch('http://localhost:8080/api/creditcards', {
            method: 'POST',
            body: JSON.stringify({
                cardHolderName: cardHolderName,
                creditCardNumber: creditCardNumber,
                cvv: cvv,
                expirationDate: expirationDate,
                paymentNetworks: paymentNetworks
            }),
            headers: {
                "Content-type": "Application/json"
            }
        })
        .then(response => response.json())
        .then(json => {
            console.log("Creacion de tarjeta de forma exitosa");
            console.log(json)

            clearForm();
        })

        
    }

    function clearForm() {
        setCardHolderName('');
        setCreditCardNumber('');
        setCvv('');
        setExpirationDate('');
        setPaymentNetworks('');
    }

    return (
        <div>
        <h2>Mi primer formulario con React y Material - UI</h2>
        <form className={classes.root} onSubmit={handleSubmit}>
            <TextField 
               label="Card Holder Name"
               required
               value={cardHolderName}
               onChange={e => setCardHolderName(e.target.value)}
            />

           <TextField 
               label="Credit Card Number"
               required
               value={creditCardNumber}
               onChange={e => setCreditCardNumber(e.target.value)}
            />

            <TextField 
               label="CVV"
               required
               value={cvv}
               onChange={e => setCvv(e.target.value)}
            />

        <TextField 
               label="Expiration Date"
               required
               value={expirationDate}
               onChange={e => setExpirationDate(e.target.value)}
            />

           <TextField 
               label="Payment Networks"
               required
               value={paymentNetworks}
               onChange={e => setPaymentNetworks(e.target.value)}
            />

            <div>
                <Button type="submit" variant="contained" color="primary">
                    Save Credit Card
                </Button>


            </div>


        </form>
        </div>

    );
}

export default RegistroTarjeta; 