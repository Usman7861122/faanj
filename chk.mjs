import { parse } from '@astrojs/compiler';
import fs from 'fs';
for (const f of process.argv.slice(2)) {
  const r = await parse(fs.readFileSync(f,'utf8'),{position:true});
  if (r.diagnostics?.length) console.log(f, JSON.stringify(r.diagnostics.map(d=>[d.severity,d.text,d.location?.line])));
}
console.log('done');
