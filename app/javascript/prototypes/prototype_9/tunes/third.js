// всё, что ниже, - properties
const synth = {
  volume: -10,
  detune: 0,
  portamento: 0.05,
  envelope: {
    attack: 0.05,
    attackCurve: 'exponential',
    decay: 0.2,
    decayCurve: 'exponential',
    sustain: 0.2,
    release: 1.5,
    releaseCurve: 'exponential'
  },
  oscillator: {
    type: 'sawtooth',
    modulationType: 'sine',
    // partialCount: 0,
    // partials: [],
    phase: 0,
    harmonicity: 0.5
  }
}

const chorus = {
  wet: 0.3,
  type: 'sine',
  frequency: 1.5,
  delayTime: 3.5,
  depth: 0.7,
  spread: 180
}

const sequence = {steps: [
  {
    time: '0:0:0',
    noteName: 'G3',
    duration: '3n',
    velocity: 3
  },
  {
    time: '1:0:0',
    noteName: 'A3',
    duration: '3n',
    velocity: 3
  },
  {
    time: '2:0:0',
    noteName: 'G3',
    duration: '3n',
    velocity: 3
  },
  {
    time: '3:0:0',
    noteName: 'A3',
    duration: '3n',
    velocity: 3
  }
], duration: '4m'}

export { synth, chorus, sequence }
