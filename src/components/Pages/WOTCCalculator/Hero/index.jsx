'use client';

import ButtonPrimary from '@/components/Common/ButtonPrimary';
import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';
import s from './hero.module.scss';

const industriesOptions = [
  {
    id: 'i0',
    title: 'Industry'
  },
  {
    id: 'i1',
    title: 'industry1'
  },
  {
    id: 'i2',
    title: 'industry2'
  },
  {
    id: 'i3',
    title: 'industry3'
  },
  {
    id: 'i4',
    title: 'industry4'
  },
  {
    id: 'i5',
    title: 'industry5'
  },
];

const Hero = () => {
  const [ result, setResult ] = useState('5,780');
  const [ formState, setFormState ] = useState({
    industry: '',
    hiresNumber: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log('form has been submitted');
    console.log(formState);
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);

    return setFormState(prev => {
      return {
        ...prev,
        [ name ]: value,
      }
    })
  };

  return (
    <section className='section is-hero'>
      <div className="container">
        <div className={s.heroWrapper}>
          <div className={s.heroTop}>
            <h1 className="heading-h2 is-centered mb-8">
              Calculate Your WOTC Savings
            </h1>

            <p className="text is-centered">
              Quickly calculate your tax credit savings with our WOTC ROI Calculator.
              Simply select your industry, input your new hires, and discover your potential savings in seconds.
            </p>
          </div>

          <div className={s.heroCalculatorWrapper}>
            <form
              className={s.calculatorForm}
              onSubmit={handleFormSubmit}
            >
              <div className={s.formFields}>
                <InputLabel
                  id="industry"
                  sx={{
                    fontFamily: 'var(--font-gilroy)',
                    fontSize: '1.8rem',
                    fontWeight: 600,
                    color: 'black',
                  }}
                >
                  Select Industry
                </InputLabel>
                <Select
                  labelId="industry"
                  required
                  name='industry'
                  value={formState.industry}

                  onChange={handleInputChange}
                  MenuProps={{
                    marginThreshold: null,
                    style: {
                      marginTop: '-10px',
                      overflow: 'scroll',
                      maxHeight: 'auto',
                    }
                  }}
                >
                  {industriesOptions.map((item) => (
                    <MenuItem
                      key={item.id}
                      value={item.title}
                    >
                      {item.title}
                    </MenuItem>
                  ))}
                </Select>

                <label className={s.formField}>
                  <span className="text is-l is-bold">
                    Enter Total Number of Annual Hires
                  </span>

                  <input
                    required
                    type="number"
                    min={10}
                    name='hiresNumber'
                    value={formState.hiresNumber}
                    onChange={handleInputChange}
                    placeholder='Number of Annual Hires'
                  />
                </label>
              </div>

              <button type='submit'>
                <ButtonPrimary
                  isLink={false}
                  isButtonBlue
                  text='Calculate'
                />
              </button>
            </form>

            <p className="text">
              Powered by the TCS algorithm, it calculates savings based on maximum hours and wages per employee.
              <br />
              Results may vary. Contact us for personalized guidance.
            </p>

            <div className={s.heroResult}>
              <p>{`$ ${result}`}</p>

              <p>Estimated WOTC Savings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
