import styles from "./Feedback.module.css"

const Feedback = ({ feedback }) => {
    const { good, neutral, bad } = feedback;
    const totalFeedback = good + neutral + bad;
    const positiveFeedback = Math.round((good / totalFeedback) * 100);

    return (
        <div className={styles.feedbackModule}>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {totalFeedback}</li>
                <li>Positive: {positiveFeedback}%</li>
            </ul>
        </div>
    );
}

export default Feedback;