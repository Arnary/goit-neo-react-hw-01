import css from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.table}>
            <thead>
                <tr>
                    <th className={css.th}>Type</th>
                    <th className={css.th}>Amount</th>
                    <th className={css.th}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => {
                    const type = item.type;
                    return (
                        <tr className={css.tr} key={item.id}>
                            <td className={css.td}>{type[0].toUpperCase()+type.slice(1)}</td>
                            <td className={css.td}>{item.amount}</td>
                            <td className={css.td}>{item.currency}</td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>

    )
};

export default TransactionHistory;
