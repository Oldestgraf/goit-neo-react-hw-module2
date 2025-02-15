import styles from "./Options.module.css"

const Options = ({ onLeaveFeedback, onReset, showReset }) => {
    const options = ["good", "neutral", "bad"];

    return (
        <div className={styles.optionsModule}>
            <ul className={styles.optionsList}>
                {options.map(option => (
                    <li key={option}>
                        <button
                            className={styles.optionsButton}
                            type="button"
                            onClick={() => onLeaveFeedback(option)}
                        >
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                        </button>
                    </li>
                ))}
                {showReset && (
                <li>
                    <button
                        className={styles.optionsButton}
                        type="button"
                        onClick={onReset}
                    >
                        Reset
                    </button>
                </li>
                )}
            </ul>
        </div>
    );
};

export default Options;