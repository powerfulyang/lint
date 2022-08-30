import type { CompilerOptions } from 'typescript';

type TsPathMapping = Exclude<CompilerOptions['paths'], undefined>;

// we don't need to escape all chars, so commented out is the real one
// const escapeRegex = (str: string) => str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
const escapeRegex = (str: string) => str.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');

export const pathsToModuleNameMapper = (
  mapping: TsPathMapping,
  { prefix = '' }: { prefix: string } = Object.create(null),
) => {
  const jestMap = {};
  for (const fromPath of Object.keys(mapping)) {
    let pattern: string;
    const toPaths = mapping[fromPath];
    // check that we have only one target path
    if (toPaths.length === 0) {
      // eslint-disable-next-line no-console
      console.warn('not mapping path with empty map', fromPath);
      // eslint-disable-next-line no-continue
      continue;
    }

    // split with '*'
    const segments = fromPath.split(/\*/g);
    if (segments.length === 1) {
      const paths = toPaths.map((target) => {
        const enrichedPrefix = prefix !== '' && !prefix.endsWith('/') ? `${prefix}/` : prefix;

        return `${enrichedPrefix}${target}`;
      });
      pattern = `^${escapeRegex(fromPath)}$`;
      jestMap[pattern] = paths.length === 1 ? paths[0] : paths;
    } else if (segments.length === 2) {
      const paths = toPaths.map((target) => {
        const enrichedTarget =
          target.startsWith('./') && prefix !== ''
            ? target.substring(target.indexOf('/') + 1)
            : target;
        const enrichedPrefix = prefix !== '' && !prefix.endsWith('/') ? `${prefix}/` : prefix;

        return `${enrichedPrefix}${enrichedTarget.replace(/\*/g, '$1')}`;
      });
      pattern = `^${escapeRegex(segments[0])}(.*)${escapeRegex(segments[1])}$`;
      jestMap[pattern] = paths.length === 1 ? paths[0] : paths;
    } else {
      // eslint-disable-next-line no-console
      console.warn('not mapping path with more than 2 segments', fromPath);
    }
  }

  return jestMap;
};
