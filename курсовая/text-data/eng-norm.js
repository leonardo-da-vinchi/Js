class EngNorm {
    constructor(funcForRandom, nowText) {
      this.funcForRandom = funcForRandom;
      this.texts = [
      "Bd hn yei e vr nmae vnwo ea il iyttsndat hr o shgts, fr ho t at i rhets o iybtai hwhc h e t edda uu mn ebt iigthero lnv. eic n eS emitofdwanth, rguh oyl ha d e Bd hn yei e vr nmae vnwo ea il iyttsndat hr o shgts, fr ho t at i rhets o iybtai hwhc h e t edda uu mn ebt iigthero lnv. eic n eS emitofdwanth, rguh oyl ha d e",
      "ibiurnd noll nm hu gnia s ehaveb de l w ka h te e l pat atrhEn.Nw o i s siht nna bunigterstie enmr, irosaybfro ucu c ie ecdon raeeerhticn m rpaat ex l poi fd 	ibiurnd noll nm hu gnia s ehaveb de l w ka h te e l pat atrhEn.Nw o i s siht nna bunigterstie enmr, irosaybfro ucu c ie ecdon raeeerhticn m rpaat ex l poi fd",
      "blnoilhdurden i a sst eallcoruonir i vse u nr, hte liyk ayWM. o yfroS re wmnave saoh vieevreh l d, hiin t is svree teUn h e aishnesr srta. fdsi dfjkbq erf dfa b blnoilhdurden i a sst eallcoruonir i vse u nr, hte liyk ayWM. o yfroS re wmnave saoh vieevreh l d, hiin t is svree teUn h e aishnesr srta. fdsi dfjkbq erf dfa b",
      "ehT otw baebs ri laeydaewe r w pi egrn mh foodofri, b tu c amb nlestee nnewhi ooM-cWahte alr r htansde mte. en oO shmohetf rt e, gf neddeni hte a in ehT otw baebs ri laeydaewe r w pi egrn mh foodofri, b tu c amb nlestee nnewhi ooM-cWahte alr r htansde mte. en oO shmohetf rt e, gf neddeni hte a in",
      "fn ulseht c d o yrpont rpeo eel d f, gv a me i nh grygana lr eutnniow rr; e h klda htece eengy neer tv cfo uf r hefroeh r ons p pmteir u. vcxz dsaui blfd bnmf fn ulseht c d o yrpont rpeo eel d f, gv a me i nh grygana lr eutnniow rr; e h klda htece eengy neer tv cfo uf r hefroeh r ons p pmteir u. vcxz dsaui blfd bnmf",
      "ioNw t s twa higl oh enug ato el ev. oM n o-c r W teh edia pc tehupk i e e vh ldr rs s p rgandaoec ritgdde fe mta i uetbnehash r en ed h ot lw rh aon ofgev ioNw t s twa higl oh enug ato el ev. oM n o-c r W teh edia pc tehupk i e e vh ldr rs s p rgandaoec ritgdde fe mta i uetbnehash r en ed h ot lw rh aon ofgev",
      "ht vcaee. nO dece s oiut, he te rwh byoeth oevd odondarhsludoehsir gst rh t piu - h ilynoet iaamln n ll a ih s t wl r o blead oot sod. fz fdsaui blzxc ewiru vcx ht vcaee. nO dece s oiut, he te rwh byoeth oevd odondarhsludoehsir gst rh t piu - h ilynoet iaamln n ll a ih s t wl r o blead oot sod. fz fdsaui blzxc ewiru vcx",
      "eT r h e wer e tobu ya rtt hi mof et h, edna t loyh d tnocu e vha nhutbeen idise isg md srbmetherof rohcfoem WtoMaen'wons et bir. heAs t ay hws imi vcb eT r h e wer e tobu ya rtt hi mof et h, edna t loyh d tnocu e vha nhutbeen idise isg md srbmetherof rohcfoem WtoMaen'wons et bir. heAs t ay hws imi vcb",
      "aLeta intth htg, oonM-e rc Wt h uela d yn aowkesd. r e idT t thebyuo day'iertoess axn tnd ss seraid, e hdh ea neb ilesg n nsloudremope thny a lsu u a, t e aLeta intth htg, oonM-e rc Wt h uela d yn aowkesd. r e idT t thebyuo day'iertoess axn tnd ss seraid, e hdh ea neb ilesg n nsloudremope thny a lsu u a, t e"
      ]
      this.nowNumber = Math.floor(Math.random() * this.texts.length);
      this.nowText = nowText;
    }
  
    getText() {
      return funcForRandom(this.texts, this.nowText);
    }
  
  
  }