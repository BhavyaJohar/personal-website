import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeader = ({ title }) => {
    return (
        <motion.div
            className="flex justify-center items-center py-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <motion.h2
                className="text-4xl md:text-6xl font-bold tracking-wide text-white border-b-4 border-indigo-600 pb-2"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                {title}
            </motion.h2>
        </motion.div>
    );
};
