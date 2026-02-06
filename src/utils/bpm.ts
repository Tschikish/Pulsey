export function calculatebpm(arr: number[]) {
  const first = arr[0];
  const numBeats = arr.length - 1;
  const last = arr[numBeats];

  const diff = (last - first) / 1000 / 60;
  return Math.round(numBeats/diff);
}
