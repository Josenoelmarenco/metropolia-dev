const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const api = supertest(app);
const Workout = require('../models/workoutModel');

const initialWorkouts = [
  { title: 'test workout 1', reps: 11, load: 101 },
  { title: 'test workout 2', reps: 12, load: 102 },
];

beforeEach(async () => {
  await Workout.deleteMany({});
  let workoutObject = new Workout(initialWorkouts[0]);
  await workoutObject.save();
  workoutObject = new Workout(initialWorkouts[1]);
  await workoutObject.save();
});

describe('GET /api/workouts', () => {
  it('should return all workouts', async () => {
    const response = await api.get('/api/workouts');
    expect(response.body).toHaveLength(initialWorkouts.length);
  });

  it('should include a specific workout in the returned list', async () => {
    const response = await api.get('/api/workouts');
    const titles = response.body.map((workout) => workout.title);
    expect(titles).toContain('test workout 2');
  });

  it('should return workouts in JSON format', async () => {
    await api
      .get('/api/workouts')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });
});
