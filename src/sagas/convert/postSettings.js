// To UI -------------------------------
export const eventsToUIModel = (events) => {
  return events.map((event) => ({
    id: event.id,
    name: event.trigger,
    runInParallel: event.stepsRunInParallel,
    actions: event.steps.map((step) => ({
      id: step.action,
      params: step.parameters
    }))
  }));
};

export const toUIModel = (data) => ({
  language: data.language,
  //...
  events: eventsToUIModel(data.events)
});

// To API -------------------------------
export const eventsToAPIModel = (events) => {
  return events.map((event) => ({
    id: event.id,
    trigger: event.name,
    stepsRunInParallel: event.runInParallel,
    steps: event.actions.map((act) => ({
      action: act.id,
      parameters: act.params
    }))
  }));
};

export const toAPIModel = (data) => ({
  language: data.language,
  //...
  events: eventsToAPIModel(data.events)
});
