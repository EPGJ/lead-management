import { useState, useEffect } from 'react';

export const useOpportunities = (defaultOpportunities, values, setFieldTouched) => {

    const [checked, setChecked] = useState(defaultOpportunities);

    useEffect(() => {
        if (checked !== defaultOpportunities) {
            values.all = !Object.values(checked).includes(false);
            values.rpa = checked.rpa;
            values.digitalProduct = checked.digitalProduct;
            values.analytics = checked.analytics;
            values.bpm = checked.bpm;
            setFieldTouched('opportunities', true);
        }
    }, [checked, values, setFieldTouched]);

    const handleChange = (e) => {
        if (e.target.name === 'all') {
            setChecked({
                rpa: e.target.checked,
                digitalProduct: e.target.checked,
                analytics: e.target.checked,
                bpm: e.target.checked,
            });
        } else {
            setChecked({
                ...checked,
                [e.target.name]: e.target.checked,
            });
        }
    };

    return [checked, setChecked, handleChange];
}