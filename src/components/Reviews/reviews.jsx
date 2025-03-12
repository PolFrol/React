export const Reviews = ({ reviews }) => {
    return (
        <>
            <h3>Reviews</h3>
            <ul>
                {
                    reviews.map((item) =>
                        <li>{item.text}</li>
                    )
                }
            </ul>
        </>
    )
}