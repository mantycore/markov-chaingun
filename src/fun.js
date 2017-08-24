export default function wrap(...args) {
    return args.reduceRight((acc, cur) => cur(acc));
}