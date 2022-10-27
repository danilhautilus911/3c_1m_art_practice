import * as Tone from 'tone' //импортруем tonejs
import React, { Component } from 'react' //импортируем react

import * as firstSettings from './tunes/first.js' //импортруем инструмент bass
import * as secondSettings from './tunes/second.js' //импортруем инструмент bass
import * as thirdSettings from './tunes/third.js' //импортруем инструмент bass


import ToneSynth from './modules/ToneSynth.jsx' //импортруем синтезатор
import SC_Button from './components/SC_Button' //импортруем кнопку, запускающую синт
import SC_Slider from './components/SC_Slider' //импортируем слайдер

// здесь определяем ноды
let firstSynth
let secondSynth
let thirdSynth

export default class Container extends Component {
  constructor(props) {
    super(props)

// потом настройки перекидываем сюда
    this.state = {
      firstSettings,
      secondSettings,
      thirdSettings //settings - все properties, перечисленные в bass.js
    }
  }

  handleStart = () => { //что делает эта функция? хэндл = клик, потом ее привязываем к клику
    // стартуем здесь
    const { firstSettings, secondSettings, thirdSettings } = this.state //беру настройки из state

    firstSynth = new Tone.Synth(firstSettings.synth).toDestination() //создается инструмент
    const firstPart = new Tone.Part((time, note) => {
      firstSynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, firstSettings.sequence.steps).start(0)
    firstPart.loopEnd = firstSettings.sequence.duration
    firstPart.loop = true

    secondSynth = new Tone.Synth(secondSettings.synth).toDestination() //создается инструмент
    const secondPart = new Tone.Part((time, note) => {
      secondSynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, secondSettings.sequence.steps).start(0)
    secondPart.loopEnd = secondSettings.sequence.duration
    secondPart.loop = true

    thirdSynth = new Tone.Synth(thirdSettings.synth).toDestination() //создается инструмент
    const thirdPart = new Tone.Part((time, note) => {
      thirdSynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, thirdSettings.sequence.steps).start(0)
    thirdPart.loopEnd = thirdSettings.sequence.duration
    thirdPart.loop = true

    Tone.Transport.start()
  }

  handleBassValueChange = (property, value) => { //функция позволяет нам управлять настройками у синтезатора
    const { firstSettings } = this.state

    if (property === 'synthType') {
      firstSynth.oscillator.type = value
      firstSettings.synth.oscillator.type = value
    } else if (property === 'synthVolume') {
      firstSynth.volume.value = value
      firstSettings.synth.volume = value
    } else if (property === 'synthDetune') {
      firstSynth.detune.value = value
      firstSettings.synth.detune = value
    } else if (property === 'synthPortamento') {
      firstSynth.portamento = value
      firstSettings.synth.portamento = value
    } else if (property === 'synthPhase') {
      firstSynth.oscillator.phase = value
      firstSettings.synth.oscillator.phase = value
    }

    this.setState({
      firstSettings
    })
  }

  handleSecondValueChange = (property, value) => { //функция позволяет нам управлять настройками у синтезатора
    const { secondSettings } = this.state

    if (property === 'synthType') {
      secondSynth.oscillator.type = value
      secondSettings.synth.oscillator.type = value
    } else if (property === 'synthVolume') {
      secondSynth.volume.value = value
      secondSettings.synth.volume = value
    } else if (property === 'synthDetune') {
      secondSynth.detune.value = value
      secondSettings.synth.detune = value
    } else if (property === 'synthPortamento') {
      secondSynth.portamento = value
      secondSettings.synth.portamento = value
    } else if (property === 'synthPhase') {
      secondSynth.oscillator.phase = value
      secondSettings.synth.oscillator.phase = value
    }

    this.setState({
      secondSettings
    })
  }

  handleThirdValueChange = (property, value) => { //функция позволяет нам управлять настройками у синтезатора
    const { thirdSettings } = this.state

    if (property === 'synthType') {
      thirdSynth.oscillator.type = value
      thirdSettings.synth.oscillator.type = value
    } else if (property === 'synthVolume') {
      thirdSynth.volume.value = value
      thirdSettings.synth.volume = value
    } else if (property === 'synthDetune') {
      thirdSynth.detune.value = value
      thirdSettings.synth.detune = value
    } else if (property === 'synthPortamento') {
      thirdSynth.portamento = value
      thirdSettings.synth.portamento = value
    } else if (property === 'synthPhase') {
      thirdSynth.oscillator.phase = value
      thirdSettings.synth.oscillator.phase = value
    }

    this.setState({
      thirdSettings
    })
  }

  render() {
    const { firstSettings, secondSettings, thirdSettings } = this.state //на каждое изменение будут поступать данные

    return (
      <div className="Container">
        <div className="Circle"></div>
        <div className="Header">
          <div className="header_left">
            <SC_Button
              text="POWER"
              handleClick={this.handleStart}
            />
            <img class="figure" src="http://localhost:3000/images/figure.svg" alt="" />
          </div>
          <div className="header_center">
              <h3>inconvenient synths</h3>
          </div>
          <div className="header_right"></div>
        </div>

        <div className="Body">
          <div className="body_left">
            <div className="body_left_top">
              <h1>synth 1</h1>
            </div>
            <div className="body_left_first">
              <ToneSynth
                settings={firstSettings}
                handleValueChange={this.handleBassValueChange}
              />
            </div>
          </div>

          <div className="body_center">
            <div className="body_center_top">
              <h1>synth 2</h1>
            </div>
            <div className="body_center_first">
              <ToneSynth
                settings={secondSettings}
                handleValueChange={this.handleSecondValueChange}
              />
            </div>
          </div>

          <div className="body_right">
            <div className="body_right_top">
              <h1>synth 3</h1>
            </div>
            <div className="body_right_first">
              <ToneSynth
                settings={thirdSettings}
                handleValueChange={this.handleThirdValueChange}
              />
            </div>
          </div>
        </div>

        <div className="Footer">
          <div className="footer_left">
            <h2>danil matlahov</h2>
          </div>
          <div className="footer_center">
            <h2>2022</h2>
          </div>
          <div className="footer_right">
              <h2>3c 1m</h2>
          </div>
        </div>
      </div>
    )
  }
}
