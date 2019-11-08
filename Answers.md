What problem does the context API help solve?
Passing props through many levels.

In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Reducers change the state.  Actions send the data to the store.  Store holds the state.
It means we have only one place that holds the state of application. Any changes would have to be done in this place leaving the state as a single source of truth.

What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state can be used in all components while component state is local to a single component.


Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
this is middleware that allows you to return functions instead of objects.  allows us to dispatch synchronous actions which is functions inside of functions!


What is your favorite state management system you've learned and this sprint? Please explain why!
I don't have a favorite, but I do believe that you use the right state management for the job.  Small-medium applications may be good with Component State or Context API
While larger applications would be good with redux or react-redux.  