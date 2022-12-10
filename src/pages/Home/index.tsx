import { Play } from 'phosphor-react'
import { useState } from 'react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

export function Home() {
  function handleSubmit(event) {
    
  }

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            name="task"
            id="task"
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestion"
          />

          <datalist id="task-suggestions">
            <option value="projeto 01" />
            <option value="projeto 02" />
          </datalist>

          <label htmlFor="task">Durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
