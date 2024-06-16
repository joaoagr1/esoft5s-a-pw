import styles from "@/components/Header/Header.module.css";
import React from "react";

interface CardSectionProps {
    titulo: string;
    children: React.ReactNode
}

function CardSection({ titulo, children }: CardSectionProps) {


    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{titulo}</h2>
            {children}
        </section>
    )
}

export default CardSection;