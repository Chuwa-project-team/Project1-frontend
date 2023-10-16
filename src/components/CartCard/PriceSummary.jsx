/* eslint-disable react/prop-types */
export default function PriceSummary({subtotal,discount}) {
    const estimatedTotal = discount? ((subtotal * 1.1 )-discount).toFixed(2):(subtotal * 1.1).toFixed(2);
    return (
        <div style={{ width: '200px', fontFamily: 'Arial' }}>
            <div style={rowStyle}>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
            </div>
            <div style={rowStyle}>
                <span>Tax</span>
                <span>${(subtotal * 0.1).toFixed(2)}</span>
            </div>
            <div style={rowStyle}>
                <span>Discount</span>
                <span>$-{discount ? discount.toFixed(2):'0.00'}</span>
            </div>
            <div style={{ ...rowStyle, borderTop: '1px solid black', paddingTop: '5px' }}>
                <strong>Estimated total</strong>
                <strong>${ estimatedTotal>=0? (estimatedTotal):(0).toFixed(2)}</strong>
            </div>
        </div>
    );
}

const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '5px'
};