import styles from "./Feedback.module.css"

const Feedback = ({ feedback, totalFeedback, positivePercentage }) => {
    const { good, neutral, bad } = feedback;

    return (
        <div className={styles.feedbackModule}>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {totalFeedback}</li>
                <li>Positive: {positivePercentage}%</li>
            </ul>
        </div>
    );
}

export default Feedback;