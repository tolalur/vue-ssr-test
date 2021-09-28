import {computed, Ref, UnwrapRef} from '@vue/composition-api';

export const withState = (target: any, state: Ref<any>) => {
  Object.keys(state.value).forEach(prop => {
    target[prop] = computed(() => state.value[prop]);
  });

  return target;
};


export const replaceState = (target: UnwrapRef<any>, state: UnwrapRef<any>) => {
  Object.keys(state).forEach(prop => {
    target[prop] = state[prop];
  });

  return target;
};
