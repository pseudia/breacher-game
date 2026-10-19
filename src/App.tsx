// @ts-nocheck
import React, { useEffect, useState, useRef } from 'react';
import { GameEngine } from './GameEngine';

function _style(s: string): React.CSSProperties {
  const obj: any = {};
  s.split(';').forEach(rule => {
    const split = rule.split(':');
    if(split.length > 1) {
      let k = split[0].trim();
      let v = split.slice(1).join(':').trim();
      if (!k || !v) return;
      k = k.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      obj[k] = v;
    }
  });
  return obj;
}


const GameIcon = ({ icon, className }: { icon: string, className?: string }) => {
  const getSvg = () => {
    switch (icon) {
      case '🏥': return <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/><path d="M12 9v4"/><path d="M10 11h4"/><path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"/></svg>;
      case '🏢': return <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>;
      case '🏦': return <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="20" width="20" height="2"/><rect x="2" y="2" width="20" height="4"/><rect x="4" y="6" width="2" height="14"/><rect x="10" y="6" width="2" height="14"/><rect x="18" y="6" width="2" height="14"/></svg>;
      case '🌐': return <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>;
      case '🛡️': return <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
      case '🔐': return <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
      case '🔒': return <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>;
      case '✂️': return <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>;
      case '⛔': return <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>;
      case '🚀': return <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>;
      case '🏭': return <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/></svg>;
      case '🛒': return <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>;
      case '📱': return <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>;
      case '⚡': return <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
      case '🎮': return <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 10H2v4h4v-4zm6 0h-4v4h4v-4zm10 0h-4v4h4v-4zM22 6H2v12h20V6z"/></svg>;
      case '📖': return <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
      case '📰': return <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>;
      case '🏆': return <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>;
      case '👩‍💻': return <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5.5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>;
      default: return <span>{icon}</span>;
    }
  };
  return <span className={className} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{getSvg()}</span>;
};

export default function App() {
  const engineRef = useRef<GameEngine | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [gameState, setGameState] = useState<any>({});
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    const engine = new GameEngine();
    engineRef.current = engine;
    
    engine.onUpdate = () => {
      setGameState({ ...engine });
    };
    
    engine.mount();
    setGameState({ ...engine });
    
    return () => {
      engine.unmount();
    };
  }, []);

  useEffect(() => {
    const engine = engineRef.current;
    if (!engine) return;
    const o = (engine as any).renderVals ? (engine as any).renderVals() : {};
    if (audioRef.current) {
      if (o.isPlaying && audioRef.current.paused) {
        audioRef.current.play().catch(e => console.log('Audio autoplay blocked', e));
      } else if (!o.isPlaying && !audioRef.current.paused) {
        audioRef.current.pause();
      }
    }
  }, [gameState]);

  if (!engineRef.current || !gameState) return null;

  const engine = engineRef.current;
  const o = (engine as any).renderVals ? (engine as any).renderVals() : {};
  
  const { setPause, set1x, btn1x, set2x, btn2x, onCanvasClick, canvasRef, hasLesson, dismissLesson, lessonDesc, hasOpp, oppTitle, oppDaysLeft, oppDesc, oppA, oppAStyle, oppALabel, oppB, oppBStyle, oppBLabel, hasNews, headline, hasSel, selLabel, closeSel, selSub, selOpts, selFoot, recVal, utilVal, scrVal, spreadLine, teamTitle, teamLvl, doTrain, trainStyle, trainLabel, teamPerks, deploysLine, doWipe, wipeStyle, wipeLabel, log, isStart, cName, setCName, iconOpts, sectorOpts, sensOpts, sizeOpts, cBudget, setCBudget, cDeploys, setCDeploys, startCustom, restart, 
    coName, coIcon, day, dayMax, budget, netLine, netColor, score,
    isPlaying, isHelp, isOver, showCustom, custom, isCustom,
    btnPause, canPause, speed1, speed2, speed3,
    btnWipe, wipeText, wipeCD,
    statsInf, statsExp, statsRem, utilColor, utility, utilPct,
    scrLabel, scrColor, scrutiny, scrPct,
    recPct, xpPct, deployColor, selX, selY,
    isEnd, endTitle, endSub, endBody, endBtnLabel, endColor,
    isLesson, lessonTitle, lessonBody,
    oAccent, oBorder, oKicker, oTitle, oLines,
    training, logs, tools, difficulty, setDifficulty, diffOpts
  } = o;
  
  const pickClinic = () => engine.start('clinic');
  const pickInsurer = () => engine.start('insurer');
  const pickEnterprise = () => engine.start('enterprise');
  const pickBank = () => engine.start('bank');
  const toggleCustom = () => engine.setState({custom: !engine.state.custom});
  const openHelp = () => o.openHelp && o.openHelp();
  const closeHelp = () => o.closeHelp && o.closeHelp();

  return (<><div style={_style(`position:relative;min-height:100vh;width:100%;background:radial-gradient(1200px 700px at 70% -10%, #251747 0%, #0D0C16 55%);color:var(--neutral-100);font-family:var(--font-body);overflow:hidden;display:flex;flex-direction:column`)}>
    <audio ref={audioRef} src="/arctsound-ambient-suspense-atmosphere-117563.mp3" loop />
    <div style={_style(`position:absolute;inset:0;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM40 40.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM0 40.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");z-index:0`)}></div>

  <header style={_style(`display:flex;align-items:center;gap:16px;padding:14px 22px;border-bottom:1px solid rgba(255,255,255,.07);flex-wrap:wrap`)}>
    <div style={_style(`display:flex;align-items:center;gap:11px;position:relative;z-index:1`)}>
      <img src="/breached_logo.svg" width="30" height="30" style={_style(`border-radius:8px;box-shadow:0 0 22px rgba(130,47,255,.6)`)} alt="Breached Logo" />
      <div>
        <div style={_style(`font-family:var(--font-display);font-weight:700;font-size:20px;letter-spacing:.14em;text-shadow:0 0 20px rgba(130,47,255,.55)`)}>BREACHED</div>
        <div style={_style(`font-size:11px;color:var(--neutral-400);letter-spacing:.05em;margin-top:1px`)}>defend your data · a governance pandemic sim</div>
      </div>
    </div>
    {!!(isPlaying) && (<>
    <div style={_style(`margin-left:auto;display:flex;align-items:center;gap:16px;flex-wrap:wrap`)}>
      <div style={_style(`display:flex;align-items:center;gap:8px;padding:5px 12px;border-radius:999px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09)`)}>
        <span style={_style(`font-size:16px`)}><GameIcon icon={coIcon} /></span>
        <span style={_style(`font-size:12px;color:var(--neutral-300)`)}><b style={_style(`color:#fff`)}>{coName}</b></span>
      </div>
      <div style={_style(`font-family:var(--font-mono);font-size:13px;color:var(--neutral-300)`)}>Day <b style={_style(`color:#fff`)}>{day}</b> / {dayMax}</div>
      <div style={_style(`display:flex;align-items:center;gap:7px;font-family:var(--font-mono);font-size:13px`)}><b style={_style(`color:#5FD3A6`)}>€{budget}k</b> <span style={_style(`color:${netColor }`)}>({netLine}/d)</span></div>
      <div style={_style(`font-family:var(--font-mono);font-size:13px;color:#CCAEFC`)}><GameIcon icon="🏆" /> {score}</div>
      <div style={_style(`display:flex;gap:4px`)}>
        <button onClick={setPause } style={_style(btnPause )}>❚❚</button>
        <button onClick={set1x } style={_style(btn1x )}>1×</button>
        <button onClick={set2x } style={_style(btn2x )}>2×</button>
      </div>
      <div style={_style(`display:flex;align-items:center;gap:8px;padding:5px 12px;border-radius:999px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09);font-size:12px;color:var(--neutral-400)`)}>
        <button onClick={() => setMuted(!isMuted)} style={_style(`background:none;border:none;color:var(--neutral-200);cursor:pointer;padding:0;font-size:16px;line-height:1;display:flex;align-items:center;justify-content:center`)} title={isMuted ? "Unmute" : "Mute"}>
          {isMuted || volume === 0 ? '🔇' : (volume < 0.5 ? '🔉' : '🔊')}
        </button>
        <input type="range" min="0" max="1" step="0.01" value={isMuted ? 0 : volume} onChange={(e) => { const v = parseFloat(e.target.value); setVolume(v); if(v > 0 && isMuted) setMuted(false); }} style={_style(`width:60px;cursor:pointer;accent-color:#CCAEFC`)} />
        <div style={_style(`width:1px;height:14px;background:rgba(255,255,255,.1)`)}></div>
        <div><a href="https://pixabay.com/users/arctsound-27113883/" target="_blank" rel="noreferrer" style={_style(`color:#CCAEFC;text-decoration:none;font-weight:600`)}>arctsound</a></div>
      </div>
      <button onClick={openHelp } style={_style(`padding:6px 12px;border-radius:8px;font-family:var(--font-mono);font-size:13px;cursor:pointer;border:1px solid rgba(231,177,92,.5);background:rgba(231,177,92,.1);color:#E7B15C`)} title="How to play">? Help</button>
    </div>
    </>)}
  </header>

  <div style={_style(`flex:1;display:flex;flex-wrap:wrap;min-height:0`)}>
    
    <div style={_style(`flex:3 1 420px;position:relative;min-height:56vh;min-width:0;overflow:hidden`)}>
      <canvas ref={canvasRef } onClick={onCanvasClick } style={_style(`display:block;width:100%;height:100%;cursor:crosshair`)}></canvas>
      {!!(hasLesson) && (<>
      <div style={_style(`position:absolute;right:14px;bottom:14px;width:min(360px,92%);background:rgba(23,21,37,.96);border:1px solid rgba(164,102,255,.5);border-radius:14px;padding:14px 16px;z-index:6;box-shadow:0 8px 24px rgba(13,12,22,.45),0 0 20px rgba(130,47,255,.12);animation:brd-in .25s ease`)}>
        <div style={_style(`display:flex;justify-content:space-between;gap:10px;align-items:baseline;margin-bottom:5px`)}>
          <b style={_style(`font-size:13px;color:#CCAEFC`)}><GameIcon icon="📖" /> {lessonTitle}</b>
          <button onClick={dismissLesson } style={_style(`border:none;background:none;color:var(--neutral-400);font-size:16px;cursor:pointer;line-height:1;padding:0`)}>✕</button>
        </div>
        <div style={_style(`font-size:12px;color:var(--neutral-200);line-height:1.5`)}>{lessonDesc}</div>
      </div>
      </>)}
      {!!(hasOpp) && (<>
      <div style={_style(`position:absolute;left:50%;transform:translateX(-50%);top:12px;width:min(440px,94%);background:rgba(23,21,37,.95);border:1px solid rgba(231,177,92,.55);border-radius:14px;padding:13px 16px;z-index:5;box-shadow:0 8px 24px rgba(13,12,22,.4)`)}>
        <div style={_style(`display:flex;justify-content:space-between;gap:10px;align-items:baseline;margin-bottom:4px`)}>
          <b style={_style(`font-size:14px;color:#E7B15C`)}><GameIcon icon="⚡" /> {oppTitle}</b>
          <span style={_style(`font-family:var(--font-mono);font-size:11px;color:var(--neutral-400);white-space:nowrap;animation:brd-blink 1.4s infinite`)}>{oppDaysLeft}d to decide</span>
        </div>
        <div style={_style(`font-size:12px;color:var(--neutral-300);line-height:1.45;margin-bottom:10px`)}>{oppDesc}</div>
        <div style={_style(`display:flex;gap:8px;flex-wrap:wrap`)}>
          <button onClick={oppA } style={_style(oppAStyle )}>{oppALabel}</button>
          <button onClick={oppB } style={_style(oppBStyle )}>{oppBLabel}</button>
        </div>
      </div>
      </>)}
      {!!(hasNews) && (<>
      <div style={_style(`position:absolute;left:16px;top:12px;max-width:min(440px,46%);background:rgba(13,12,22,.72);border:1px solid rgba(231,177,92,.35);border-radius:999px;padding:6px 16px;font-family:var(--font-mono);font-size:11px;color:#E7B15C;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;z-index:4`)}><GameIcon icon="📰" /> {headline}</div>
      </>)}
      {!!(hasSel) && (<>
      <div style={_style(`position:absolute;left:${selX }px;top:${selY }px;width:280px;background:rgba(23,21,37,.97);border:1px solid rgba(164,102,255,.55);border-radius:12px;padding:12px 13px;z-index:8;box-shadow:0 10px 28px rgba(13,12,22,.6),0 0 24px rgba(130,47,255,.14);animation:brd-in .22s ease`)}>
        <div style={_style(`display:flex;justify-content:space-between;gap:10px;align-items:baseline;margin-bottom:2px`)}>
          <b style={_style(`font-size:13px;color:#fff`)}>{selLabel}</b>
          <button onClick={closeSel } style={_style(`border:none;background:none;color:var(--neutral-400);font-size:15px;cursor:pointer;line-height:1;padding:0`)}>✕</button>
        </div>
        <div style={_style(`font-size:11px;color:var(--neutral-400);margin-bottom:9px`)}>{selSub}</div>
        <div style={_style(`display:flex;flex-direction:column;gap:5px`)}>
          {(selOpts || []).map((o: any, i: number) => (<React.Fragment key={i}>
            <button onClick={o.onClick } style={_style(o.style )}><span style={_style(`font-size:15px;line-height:1`)}><GameIcon icon={o.icon} /></span><span style={_style(`flex:1;text-align:left`)}>{o.name}</span><span style={_style(`font-family:var(--font-mono);font-size:11px`)}>{o.cost}</span></button>
          </React.Fragment>))}
        </div>
        <div style={_style(`font-size:10px;color:var(--neutral-500);margin-top:8px`)}>{selFoot}</div>
      </div>
      </>)}
      {!!(isPlaying) && (<>
      <div style={_style(`position:absolute;left:16px;bottom:14px;display:flex;flex-direction:column;gap:6px;font-size:11px;color:var(--neutral-300);background:rgba(13,12,22,.55);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:9px 12px`)}>
        <div style={_style(`display:flex;align-items:center;gap:8px`)}><span style={_style(`width:10px;height:10px;border-radius:50%;background:#D5432E;box-shadow:0 0 8px #D5432E`)}></span> Breached — real records leaking</div>
        <div style={_style(`display:flex;align-items:center;gap:8px`)}><span style={_style(`width:10px;height:10px;border-radius:50%;background:#A466FF`)}></span> Breached — but only tokens leaked</div>
        <div style={_style(`display:flex;align-items:center;gap:8px`)}><span style={_style(`width:10px;height:10px;border-radius:50%;background:#2E6FD5`)}></span> Breached — encrypted blob (needs the key)</div>
        <div style={_style(`display:flex;align-items:center;gap:8px`)}><span style={_style(`width:10px;height:10px;border-radius:50%;border:2px solid #A466FF`)}></span> Protected system (ring = defence)</div>
        <div style={_style(`color:var(--neutral-500)`)}><b style={_style(`color:#CCAEFC`)}>Click any Europe system</b> to choose its defence — abroad is out of reach.</div>
      </div>
      </>)}
    </div>

    
    {!!(isPlaying) && (<>
    <aside style={_style(`flex:1 1 320px;min-width:0;max-width:420px;border-left:1px solid rgba(255,255,255,.07);padding:18px 18px 10px;display:flex;flex-direction:column;gap:16px;overflow-y:auto;max-height:calc(100vh - 60px)`)}>

      <div style={_style(`display:flex;flex-direction:column;gap:13px`)}>
        <div>
          <div style={_style(`display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px`)}><span style={_style(`color:var(--neutral-300)`)}>Real records exposed</span><b style={_style(`color:#F0857A;font-family:var(--font-mono)`)}>{recVal}</b></div>
          <div style={_style(`height:9px;background:rgba(255,255,255,.07);border-radius:999px;overflow:hidden`)}><div style={_style(`height:100%;width:${recPct }%;background:linear-gradient(90deg,#D5432E,#F0857A);transition:width .4s ease`)}></div></div>
        </div>
        <div>
          <div style={_style(`display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px`)}><span style={_style(`color:var(--neutral-300)`)}>Business utility of your data</span><b style={_style(`color:#5FD3A6;font-family:var(--font-mono)`)}>{utilVal}%</b></div>
          <div style={_style(`height:9px;background:rgba(255,255,255,.07);border-radius:999px;overflow:hidden`)}><div style={_style(`height:100%;width:${utilPct }%;background:linear-gradient(90deg,#1FA672,#5FD3A6);transition:width .4s ease`)}></div></div>
        </div>
        <div>
          <div style={_style(`display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px`)}><span style={_style(`color:var(--neutral-300)`)}>Regulator scrutiny</span><b style={_style(`color:#E7B15C;font-family:var(--font-mono)`)}>{scrVal}%</b></div>
          <div style={_style(`height:9px;background:rgba(255,255,255,.07);border-radius:999px;overflow:hidden`)}><div style={_style(`height:100%;width:${scrPct }%;background:linear-gradient(90deg,#C97A1E,#E7B15C);transition:width .4s ease`)}></div></div>
        </div>
        <div style={_style(`font-size:11px;color:var(--neutral-500);font-family:var(--font-mono)`)}>{spreadLine}</div>
      </div>

      <div style={_style(`border:1px solid rgba(255,255,255,.09);border-radius:12px;padding:11px 13px;background:linear-gradient(180deg,rgba(130,47,255,.07),rgba(255,255,255,.01))`)}>
        <div style={_style(`display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:7px`)}>
          <span style={_style(`font-size:12px;color:var(--neutral-200)`)}><GameIcon icon="👩‍💻" /> <b style={_style(`color:#fff`)}>{teamTitle}</b> <span style={_style(`font-family:var(--font-mono);font-size:11px;color:#CCAEFC`)}>lvl {teamLvl}</span></span>
          <button onClick={doTrain } style={_style(trainStyle )}>{trainLabel}</button>
        </div>
        <div style={_style(`height:6px;background:rgba(255,255,255,.07);border-radius:999px;overflow:hidden`)}><div style={_style(`height:100%;width:${xpPct }%;background:linear-gradient(90deg,#822FFF,#CCAEFC);transition:width .4s ease`)}></div></div>
        <div style={_style(`font-size:10px;color:var(--neutral-500);margin-top:6px;font-family:var(--font-mono)`)}>{teamPerks}</div>
      </div>

      <div>
        <div style={_style(`display:flex;justify-content:space-between;align-items:baseline;margin-bottom:9px`)}>
          <div style={_style(`font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--neutral-400)`)}>Defence toolkit — click a system on the map</div>
          <span style={_style(`font-family:var(--font-mono);font-size:11px;color:${deployColor }`)}>{deploysLine}</span>
        </div>
        {(tools || []).map((t: any, i: number) => (<React.Fragment key={i}>
          <div style={_style(`display:flex;gap:11px;align-items:flex-start;width:100%;padding:9px 12px;border-radius:10px;margin-bottom:7px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.02);color:#fff`)}>
            <span style={_style(`font-size:19px;line-height:1`)}><GameIcon icon={t.icon} /></span>
            <span style={_style(`flex:1`)}><span style={_style(`display:flex;justify-content:space-between;gap:8px`)}><b style={_style(`font-size:13px`)}>{t.name}</b><span style={_style(`font-family:var(--font-mono);font-size:11px;color:#CCAEFC`)}>{t.costLabel}</span></span><span style={_style(`display:block;font-size:11px;color:var(--neutral-400);margin-top:2px;line-height:1.35`)}>{t.desc}</span></span>
          </div>
        </React.Fragment>))}
        <button onClick={doWipe } style={_style(wipeStyle )}>
          <span style={_style(`font-size:19px;line-height:1`)}>🧹</span>
          <span style={_style(`flex:1`)}><span style={_style(`display:flex;justify-content:space-between;gap:8px`)}><b style={_style(`font-size:13px`)}>Incident response sweep</b><span style={_style(`font-family:var(--font-mono);font-size:11px;color:#CCAEFC`)}>{wipeLabel}</span></span><span style={_style(`display:block;font-size:11px;color:var(--neutral-400);margin-top:2px;line-height:1.35`)}>Wipe up to 3 breached systems inside EU jurisdiction. Copies abroad can’t be recalled.</span></span>
        </button>
      </div>

      <div>
        <div style={_style(`font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--neutral-400);margin-bottom:8px`)}>Incident log</div>
        <div style={_style(`display:flex;flex-direction:column;gap:6px`)}>
          {(log || []).map((e: any, i: number) => (<React.Fragment key={i}>
            <div style={_style(`font-size:12px;line-height:1.35;padding:7px 10px;border-radius:8px;background:rgba(255,255,255,.03);border-left:2px solid ${e.color }`)}><span style={_style(`font-family:var(--font-mono);color:var(--neutral-500);font-size:11px`)}>D{e.day} · </span>{e.text}</div>
          </React.Fragment>))}
        </div>
      </div>
      <div style={_style(`margin-top:auto;padding-top:12px;border-top:1px solid rgba(255,255,255,.06);font-size:10px;color:var(--neutral-500);line-height:1.6`)}>🛡 Powered by <a href="https://www.pseudia.eu" style={_style(`color:#CCAEFC;text-decoration:none;font-weight:600`)}>Pseudia</a> — the pseudonymisation engine<br />© 2026 BREACHED · educational simulation · may not be copied or redistributed</div>
    </aside>
    </>)}
  </div>

  
  {!!(isStart) && (<>
  <div style={_style(`position:absolute;inset:0;background:rgba(13,12,22,.86);backdrop-filter:blur(3px);display:flex;justify-content:center;padding:24px;overflow-y:auto;z-index:20`)}>
    <div style={_style(`max-width:940px;width:100%;margin:auto`)}>
      <div style={_style(`text-align:center;margin-bottom:22px`)}>
        <div style={_style(`display:inline-flex;align-items:center;gap:8px;padding:5px 14px;border-radius:999px;background:rgba(130,47,255,.16);border:1px solid rgba(164,102,255,.4);font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#CCAEFC;margin-bottom:16px`)}>★ EU-made data pandemic sim</div>
        <img src="/breached_logo.svg" width="80" height="80" style={_style(`display:block;margin:0 auto 20px auto;border-radius:18px;box-shadow:0 0 40px rgba(130,47,255,.6)`)} alt="Breached Logo" />
        <h1 style={_style(`font-family:var(--font-display);font-size:clamp(30px,5.5vw,52px);line-height:1.05;margin:0 0 12px;letter-spacing:-.02em`)}>The breach is coming.<br />What did you protect?</h1>
        <p style={_style(`max-width:640px;margin:0 auto;color:var(--neutral-300);font-size:16px;line-height:1.55`)}>You run an EU organisation. A breach <b style={_style(`color:#fff`)}>will</b> get in — and once copies leave your systems they spread worldwide on their own. Your only real choice is what those copies <i>contain</i>. <b style={_style(`color:#CCAEFC`)}>Click any of your systems on the map</b> to choose its defence — or cut it off entirely — and keep the business running.<br />First: what kind of company are you?</p>
      </div>
      <div style={_style(`display:flex;justify-content:center;gap:12px;margin-bottom:20px;margin-top:16px`)}>
        <span style={_style(`color:var(--neutral-400);font-size:14px;align-self:center`)}>Difficulty:</span>
        {(diffOpts || []).map((o: any, i: number) => (
          <button key={i} onClick={() => setDifficulty(o.id)} style={_style(`padding:6px 16px;border-radius:20px;border:1px solid ${difficulty === o.id ? '#A466FF' : 'rgba(255,255,255,.1)'};background:${difficulty === o.id ? 'rgba(130,47,255,.2)' : 'rgba(255,255,255,.05)'};color:${difficulty === o.id ? '#fff' : 'var(--neutral-400)'};cursor:pointer;font-family:inherit;font-size:14px`)}>
            {o.name}
          </button>
        ))}
      </div>
      <div style={_style(`display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px`)}>
        <button onClick={pickClinic } style={_style(`text-align:left;padding:18px;border-radius:14px;border:1px solid rgba(164,102,255,.4);background:rgba(255,255,255,.03);color:#fff;cursor:pointer;font-family:inherit;transition:transform .12s ease`)}>
          <div style={_style(`font-size:28px;margin-bottom:8px`)}><GameIcon icon="🏥" /></div><b style={_style(`font-size:16px`)}>Riverside Clinic</b><div style={_style(`font-size:12px;color:#CCAEFC;margin:3px 0 8px`)}>Small · healthcare</div>
          <div style={_style(`font-size:12px;color:var(--neutral-400);line-height:1.55`)}>Base budget <b style={_style(`color:#5FD3A6`)}>€120k</b> · income low<br />IT team: 2 concurrent deploys<br />Data: <b style={_style(`color:#F0857A`)}>highly sensitive</b> patient records<br />Small estate — but one leak is fatal to trust.</div></button>
        <button onClick={pickInsurer } style={_style(`text-align:left;padding:18px;border-radius:14px;border:1px solid rgba(164,102,255,.4);background:rgba(255,255,255,.03);color:#fff;cursor:pointer;font-family:inherit;transition:transform .12s ease`)}>
          <div style={_style(`font-size:28px;margin-bottom:8px`)}><GameIcon icon="🏢" /></div><b style={_style(`font-size:16px`)}>Meridian Mutual</b><div style={_style(`font-size:12px;color:#CCAEFC;margin:3px 0 8px`)}>Mid-size · insurance</div>
          <div style={_style(`font-size:12px;color:var(--neutral-400);line-height:1.55`)}>Base budget <b style={_style(`color:#5FD3A6`)}>€200k</b> · income solid<br />Outsourced IT: <b style={_style(`color:#E7B15C`)}>2 concurrent deploys</b><br />Data: financial + health claims<br />Cash-rich, capability-poor.</div></button>
        <button onClick={pickBank } style={_style(`text-align:left;padding:18px;border-radius:14px;border:1px solid rgba(164,102,255,.4);background:rgba(255,255,255,.03);color:#fff;cursor:pointer;font-family:inherit;transition:transform .12s ease`)}>
          <div style={_style(`font-size:28px;margin-bottom:8px`)}><GameIcon icon="🏦" /></div><b style={_style(`font-size:16px`)}>Nova Capital</b><div style={_style(`font-size:12px;color:#CCAEFC;margin:3px 0 8px`)}>Mid-large · financial services</div>
          <div style={_style(`font-size:12px;color:var(--neutral-400);line-height:1.55`)}>Base budget <b style={_style(`color:#5FD3A6`)}>€300k</b> · income high<br />IT team: 3 concurrent deploys<br />Data: accounts, transactions, credit files<br /><b style={_style(`color:#E7B15C`)}>Regulators watch every move.</b></div></button>
        <button onClick={pickEnterprise } style={_style(`text-align:left;padding:18px;border-radius:14px;border:1px solid rgba(164,102,255,.4);background:rgba(255,255,255,.03);color:#fff;cursor:pointer;font-family:inherit;transition:transform .12s ease`)}>
          <div style={_style(`font-size:28px;margin-bottom:8px`)}><GameIcon icon="🌐" /></div><b style={_style(`font-size:16px`)}>Atlas Group</b><div style={_style(`font-size:12px;color:#CCAEFC;margin:3px 0 8px`)}>Large · multinational</div>
          <div style={_style(`font-size:12px;color:var(--neutral-400);line-height:1.55`)}>Base budget <b style={_style(`color:#5FD3A6`)}>€400k</b> · income high<br />Big IT: 3 concurrent deploys<br />Sprawling estate — <b style={_style(`color:#F0857A`)}>breach spreads faster</b><br />Regulators watch you closely.</div></button>
      </div>
      <div style={_style(`display:flex;gap:10px;margin-top:12px;flex-wrap:wrap`)}>
        <button onClick={toggleCustom } style={_style(`flex:2 1 260px;text-align:center;padding:13px;border-radius:14px;border:1px dashed rgba(164,102,255,.5);background:rgba(130,47,255,.07);color:#CCAEFC;cursor:pointer;font-family:inherit;font-size:14px;font-weight:500`)}>🛠 Or design your own company →</button>
        <button onClick={openHelp } style={_style(`flex:1 1 160px;text-align:center;padding:13px;border-radius:14px;border:1px solid rgba(231,177,92,.45);background:rgba(231,177,92,.07);color:#E7B15C;cursor:pointer;font-family:inherit;font-size:14px;font-weight:500`)}>? How to play</button>
      </div>
      {!!(isCustom) && (<>
      <div style={_style(`margin-top:12px;border:1px solid rgba(164,102,255,.5);border-radius:16px;padding:20px 22px;background:rgba(23,21,37,.85)`)}>
        <div style={_style(`display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px 22px`)}>
          <div>
            <div style={_style(`font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--neutral-400);margin-bottom:6px`)}>Company name</div>
            <input value={cName } onChange={setCName } style={_style(`width:100%;padding:9px 12px;border-radius:9px;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.05);color:#fff;font-family:inherit;font-size:14px`)} />
            <div style={_style(`display:flex;gap:6px;margin-top:10px;flex-wrap:wrap`)}>
              {(iconOpts || []).map((io: any, i: number) => (<React.Fragment key={i}><button onClick={io.onClick } style={_style(io.style )}><GameIcon icon={io.ic} /></button></React.Fragment>))}
            </div>
          </div>
          <div>
            <div style={_style(`font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--neutral-400);margin-bottom:6px`)}>Sector — names your systems</div>
            <div style={_style(`display:flex;gap:6px;flex-wrap:wrap`)}>{(sectorOpts || []).map((o: any, i: number) => (<React.Fragment key={i}><button onClick={o.onClick } style={_style(o.style )}>{o.label}</button></React.Fragment>))}</div>
            <div style={_style(`font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--neutral-400);margin:12px 0 6px`)}>Data sensitivity — how much a real leak hurts</div>
            <div style={_style(`display:flex;gap:6px;flex-wrap:wrap`)}>{(sensOpts || []).map((o: any, i: number) => (<React.Fragment key={i}><button onClick={o.onClick } style={_style(o.style )}>{o.label}</button></React.Fragment>))}</div>
          </div>
          <div>
            <div style={_style(`font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--neutral-400);margin-bottom:6px`)}>Company size — income & how fast a breach travels</div>
            <div style={_style(`display:flex;gap:6px;flex-wrap:wrap`)}>{(sizeOpts || []).map((o: any, i: number) => (<React.Fragment key={i}><button onClick={o.onClick } style={_style(o.style )}>{o.label}</button></React.Fragment>))}</div>
            <div style={_style(`display:flex;gap:18px;margin-top:12px;flex-wrap:wrap`)}>
              <label style={_style(`font-size:12px;color:var(--neutral-300)`)}>Budget <b style={_style(`color:#5FD3A6;font-family:var(--font-mono)`)}>€{cBudget}k</b><br /><input type="range" min="40" max="250" step="5" value={cBudget } onChange={setCBudget } style={_style(`width:150px;accent-color:#822FFF`)} /></label>
              <label style={_style(`font-size:12px;color:var(--neutral-300)`)}>IT capacity <b style={_style(`color:#CCAEFC;font-family:var(--font-mono)`)}>{cDeploys} concurrent</b><br /><input type="range" min="1" max="4" step="1" value={cDeploys } onChange={setCDeploys } style={_style(`width:150px;accent-color:#822FFF`)} /></label>
            </div>
          </div>
        </div>
        <button onClick={startCustom } style={_style(`margin-top:18px;padding:12px 26px;border-radius:10px;border:none;background:var(--bg-brand);color:#fff;font-family:inherit;font-weight:500;font-size:15px;cursor:pointer`)}>Launch {cName} →</button>
      </div>
      </>)}
      <p style={_style(`text-align:center;color:var(--neutral-500);font-size:12px;margin-top:18px`)}>The lesson hides in the tools: what you deploy at the source decides what every downstream copy contains.</p>
      <p style={_style(`text-align:center;color:var(--neutral-600);font-size:10.5px;margin-top:10px`)}>🛡 Powered by <a href="https://www.pseudia.eu" style={_style(`color:#CCAEFC;text-decoration:none;font-weight:600`)}>Pseudia</a> — the pseudonymisation engine · © 2026 BREACHED · educational simulation · may not be copied or redistributed</p>
    </div>
  </div>
  </>)}

  
  {!!(isHelp) && (<>
  <div style={_style(`position:absolute;inset:0;background:rgba(13,12,22,.88);backdrop-filter:blur(4px);display:flex;justify-content:center;padding:24px;overflow-y:auto;z-index:30`)}>
    <div style={_style(`max-width:720px;width:100%;margin:auto;border:1px solid rgba(164,102,255,.45);border-radius:18px;background:rgba(23,21,37,.97);padding:28px 30px;animation:brd-in .22s ease`)}>
      <div style={_style(`display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px`)}>
        <h2 style={_style(`font-family:var(--font-display);font-size:24px;margin:0;letter-spacing:-.01em`)}>How to play</h2>
        <button onClick={closeHelp } style={_style(`border:none;background:none;color:var(--neutral-400);font-size:18px;cursor:pointer;padding:0`)}>✕</button>
      </div>
      <p style={_style(`font-size:13px;color:#CCAEFC;margin:0 0 16px`)}>The game is paused while this is open.</p>
      <div style={_style(`display:flex;flex-direction:column;gap:14px;font-size:13.5px;line-height:1.6;color:var(--neutral-200)`)}>
        <div><b style={_style(`color:#fff`)}>🎯 The goal.</b> A breach WILL get into your company and spread worldwide — you can't stop the copies. You win by making sure that what leaks is <b style={_style(`color:#CCAEFC`)}>worthless</b>, while keeping your data usable and your budget alive for {dayMax} days.</div>
        <div><b style={_style(`color:#fff`)}>🖱 How to act.</b> Click any of your systems in the <b>Europe</b> zone → a menu opens on the node → pick a defence (or cut its connections). Each deploy costs money and one unit of daily IT capacity. Systems abroad are out of reach — that's the point.</div>
        <div><b style={_style(`color:#fff`)}>📊 The three meters.</b> <b style={_style(`color:#F0857A`)}>Real records exposed</b> — lose at 45% of all records. <b style={_style(`color:#5FD3A6`)}>Business utility</b> — your income scales with it; strangle your data and the board strangles your budget. <b style={_style(`color:#E7B15C`)}>Regulator scrutiny</b> — rises only when REAL data leaks; at 50% and 80% you get fined, at 100% you're shut down.</div>
        <div><b style={_style(`color:#fff`)}>🛠 The defences.</b> What a system contains when copies leave is what spreads forever. <b style={_style(`color:#A466FF`)}>Pseudonymise</b>: cheap, data keeps working, leaks become worthless tokens. <b style={_style(`color:#7FA8EC`)}>Encrypt</b>: pricey, safe until a key slips, data is dead weight daily. <b style={_style(`color:#E7B15C`)}>Lockdown</b>: slows break-ins, but leaks stay real. <b style={_style(`color:#8A86A3`)}>Anonymise</b>: very expensive (k-anonymity audits) and destroys the data's value. <b style={_style(`color:#F0857A`)}>Cut connections</b>: stops spread dead, kills the business use.</div>
        <div><b style={_style(`color:#fff`)}><GameIcon icon="⚡" /> Events.</b> Dilemmas pop up on a timer — insiders, zero-days, cloud attacks, tempting data deals. Ignoring them is a gamble. Partners also get breached on their own, and employees can walk data out the door: only source protection covers you there. And the company keeps evolving — new systems go live during the game, born unprotected and already integrated: protect them at birth.</div>
        <div><b style={_style(`color:#fff`)}><GameIcon icon="👩‍💻" /> Your team.</b> Deploys and wins earn XP. Levels cut deploy costs, raise insider detection, and add +1 deploy/day at lvl 3 and 5. Training (€12k) fast-forwards XP.</div>
        <div><b style={_style(`color:#fff`)}><GameIcon icon="🏆" /> Score.</b> Every breached system that leaks only tokens floats a <b style={_style(`color:#CCAEFC`)}>DEFLECTED +40</b>; real leaks cost points. Survive well and the grade screen tells you what your strategy taught you.</div>
      </div>
      <button onClick={closeHelp } style={_style(`margin-top:20px;padding:11px 22px;border-radius:10px;border:none;background:var(--bg-brand);color:#fff;font-family:inherit;font-weight:500;font-size:14px;cursor:pointer`)}>Back to the game →</button>
    </div>
  </div>
  </>)}

  
  {!!(isOver) && (<>
  <div style={_style(`position:absolute;inset:0;background:rgba(13,12,22,.9);backdrop-filter:blur(4px);display:flex;justify-content:center;padding:24px;overflow-y:auto;z-index:20`)}>
    <div style={_style(`max-width:680px;width:100%;margin:auto;border:1px solid ${oBorder };border-radius:20px;background:linear-gradient(180deg,rgba(255,255,255,.04),rgba(255,255,255,.01));padding:34px 34px 28px`)}>
      <div style={_style(`display:inline-flex;align-items:center;gap:8px;padding:5px 13px;border-radius:999px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:${oAccent };border:1px solid ${oBorder };margin-bottom:16px`)}>{oKicker}</div>
      <h2 style={_style(`font-family:var(--font-display);font-size:clamp(28px,4.5vw,42px);line-height:1.05;margin:0 0 20px;letter-spacing:-.02em;color:${oAccent }`)}>{oTitle}</h2>
      <div style={_style(`display:flex;gap:26px;flex-wrap:wrap;margin-bottom:22px`)}>
        <div><div style={_style(`font-family:var(--font-display);font-size:42px;font-weight:700;line-height:1;color:#F0857A`)}>{recVal}</div><div style={_style(`font-size:12px;color:var(--neutral-400);margin-top:6px`)}>real records exposed</div></div>
        <div><div style={_style(`font-family:var(--font-display);font-size:42px;font-weight:700;line-height:1;color:#5FD3A6`)}>{utilVal}%</div><div style={_style(`font-size:12px;color:var(--neutral-400);margin-top:6px`)}>business utility kept</div></div>
        <div><div style={_style(`font-family:var(--font-display);font-size:42px;font-weight:700;line-height:1;color:#CCAEFC`)}>€{budget}k</div><div style={_style(`font-size:12px;color:var(--neutral-400);margin-top:6px`)}>budget remaining</div></div>
        <div><div style={_style(`font-family:var(--font-display);font-size:42px;font-weight:700;line-height:1;color:#E7B15C`)}>{score}</div><div style={_style(`font-size:12px;color:var(--neutral-400);margin-top:6px`)}>defence score</div></div>
      </div>
      <div style={_style(`display:flex;flex-direction:column;gap:12px;margin-bottom:26px`)}>
        {(oLines || []).map((line: string, i: number) => (<React.Fragment key={i}>
          <p style={_style(`margin:0;font-size:15px;line-height:1.55;color:var(--neutral-200)`)}>{line}</p>
        </React.Fragment>))}
      </div>
      <div style={_style(`display:flex;gap:10px;flex-wrap:wrap`)}>
        <button onClick={restart } style={_style(`padding:12px 22px;border-radius:10px;border:none;background:var(--bg-brand);color:#fff;font-family:inherit;font-weight:500;font-size:15px;cursor:pointer`)}>↻ Run another company</button>
      </div>
    </div>
  </div>
  </>)}

</div>
</>);
}
