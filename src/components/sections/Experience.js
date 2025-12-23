import Status from "../ui/Status";
import styles from "./Experience.module.css";


function Experience() {
  return (
    <section id="experiences" className={styles.experience}>
        <Status title="Experiências"></Status>
        <div className={styles.timeline}>
            {/* ITEM 1 */}
            <div className={styles.item}>
                <div className={styles.left}>
                    <span className={styles.dot} />

                    <div>
                    <h3 className={styles.company}>Sumup</h3>
                    <p className={styles.role}>Planning Intern</p>
                    <p className={styles.date}>May 2025 - Present · 8 mos</p>
                    </div>
                </div>

                <div className={styles.right}>
                    <ul>
                    <li>
                        Creating application interfaces with Figma and modeling databases
                        in PostgreSQL.
                    </li>
                    <li>
                        Developing a dynamic forecasting model for the Logistics team to
                        support strategic planning.
                    </li>
                    <li>
                        Designing and planning a new application to support the Sales
                        team, including PRD and RFC documentation, process mapping with
                        Service Blueprint and architecture modeling with C4 Model.
                    </li>
                    </ul>
                </div>
            </div>

            <div className={styles.divider} />

            {/* ITEM 2 */}
            <div className={styles.item}>
            <div className={styles.left}>
                <span className={styles.dot} />

                <div>
                <p className={styles.role}>Apprenticeship - Sales & Growth</p>
                <p className={styles.date}>Jul 2024 - May 2025 · 11 mos</p>
                </div>
            </div>

            <div className={styles.right}>
                <ul>
                <li>
                    Updating and monitoring KPIs to support data-driven
                    decision-making.
                </li>
                <li>
                    Creating, maintaining, and optimizing SQL queries for data
                    extraction and analysis.
                </li>
                <li>
                    Automating manual processes and operational routines using Python
                    to improve efficiency.
                </li>
                </ul>
            </div>
            </div>
        </div>
    </section>
  );
}


export default Experience;