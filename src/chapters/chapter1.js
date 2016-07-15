const React = require('react')
import { MapFromInventory, Examinable, FromInventory, NextChapter } from '../components'
import { connect } from 'react-redux'
import { RenderSection } from '.'

const _Chapter = ({currentSection, inventory, chapterId}) => {
  var libraryMaps = {
    note: `You recite what the note said, word-for-word. You describe the
    lettering, the handwriting like "someone formally taught but with a slight tremor."`,
    photograph: `"It was a family photo, posed. Four adults and a girl. Two of the adults were
    young. They looked like brother and sister."`,
    prescription: `'It was Capoten,' you say immediately. 'To be taken three times daily. 100 mg.'`
  }


  var sections = [
    <section>
      <hr/>
      <h1>Tentative Title</h1>
      <h2 className="subtitle">An interactive story</h2>
      <h5>by Liza Daly</h5>

      <h2>Chapter One</h2>
      <h3>At the diner</h3>
      <p>You agreed to continue this elsewhere, so here you are: big booths, bad coffee. It's the
        middle of a work week so there's nobody here but truck drivers and retirees. Detective Whitby's
        coffee is black; yours is choked with an unmanly amount of cream and sugar. You've left it untouched.
      </p>
      <p>"Tell me again about the <FromInventory inventory={inventory.p0_library_things}/>.
        What exactly did you see?"
      </p>
      <p>You just stick to the facts. <MapFromInventory from={inventory.p0_library_things} to={libraryMaps}/></p>
      <p>The detective makes no immediate response, just notes down what you wrote. "And describe
      the room again."</p>
      <p>"I already told you—"</p>
      <p>"Again." She's not meeting your eye, not giving any clues about potential right or wrong
      answers. She's good.</p>
      <p>"It was a study or personal library with an adjacent bedroom.
        Two single beds in the room, bookshelves, a desk with a few things, but I only looked closely at
        the <FromInventory inventory={inventory.p0_library_things} />."</p>
      <p>"And describe the person you saw."</p>
      <p>"I can't."</p>
      <p>Now she looks up. "You
        saw the <FromInventory inventory={inventory.p0_library_things} /> clearly, but you don't remember anything about the
        person you're telling me is a killer?"</p>
      <p>How to explain? It was like staring down the wrong end of a telescope. The desk, that
        glove, those were in sharp focus, but everything else was dark and foggy. An obscure memory arises: you were about ten,
        playing in the corner while your mom read for two teenage girls. It was so crowded, overheated, and their giggling and
        the humid summer air swirled all around until you couldn't breathe. You nearly fainted
        that time, and this experience was like that—staring down a darkening
        tunnel and all the world falling away from you. But you only say,
      lamely, "It was hard to see."</p>
      <p>She's writing again, for a long time. You try sipping your coffee, but
      it's gone cold and all that cream is nauseating. </p>
      <p>"What do you sense from this?" she says without looking up. She
        lays <Examinable expansions={["a man's watch", "an ordinary gold watch"]} tag="c1_watch" /> on the table.</p>
    </section>,
    <section>
      <p>You palm it briefly, and then set it back down. "It's a watch. Did you want to
      know if it's a fake? I have no idea."</p>

      <p>No reply, just more scratching in that damn notepad. "And this?" She produces
        a <Examinable expansions={["handkerchief", "handkerchief, covered in dark red stains, which you recoil from when you turn it over"]} tag="c1_handerchief" />.
      </p>
    </section>,
    <section>
      <p>"Jesus Christ is that blood?" Instinctively you're trying to push back from table but you're in a booth, there's nowhere to go.</p>
      <p>"Do you sense anything from it?" she asks blandly, like surprising people with bloody evidence is the most
      ordinary thing in the world. Maybe for psycho cops it is.</p>
      <p>"No! What the hell is wrong with you?"</p>
      <p>She nods, not to you but to some internal thought, and collects the watch and the
        handkerchief. She now looks you directly in the eyes. "The watch was my ex's. The
        handkerchief I bought on the way here and soaked it in ketschup when you were
        in the bathroom."
      </p>
      <p>Your stomach is still churning. "Because you think I'm a fraud."</p>
      <p>"Of course you're a fraud."</p>
      <p>She's not wrong, but that stings. It probably shows on your face, because
        she sighs and says, "Everything you described about that room was right.
        Maybe you knew it because you're a murderer. Maybe you're... something else.
        But you weren't lying, and I get the impression you're as surprised by that as anybody."</p>

      <p>Before you can react to that extraordinary statement, she says, "Let's try this
        now," and tosses you a <Examinable expansions={["small metal object.", "<psychic>frustrated cutting device</psychic>.", "unfamiliar metal tool that's emanating frustration, and the moment you catch it you're—<br/><br/><br/>"]} tag="c1_device" />
      </p>
    </section>,
    <div className="in-flashback">
      <figure className="chapter1" />
      <h3>In the courtyard</h3>
      <section>
        <p>
          It's dawn and you can smell salt in the air. <Examinable expansions={['Something', 'A metal device']} tag="c1_device2" /> nearby is
          frustrated.
        </p>
      </section>
    </div>,
    <section>
      <p>
        This is the rear courtyard of the  Healey property. The neo-classical house is
        brightly lit by the rising sun, but as before, your vision blurs and darkens
        around the edges. You can make out a decorative stone fence enclosing the
        courtyard, accessed by a set of stairs flanked by urns. The stairs lead to a
        sandy path through the dunes and presumably empties out onto their private beach.
      </p>
      <p>There's
        an odd sense of dual recognition: you just <em>know</em> where you
        are, but you've also been here before—maybe twenty years ago, tagging
        along with your mom on one of her rare house calls. She'd parked in the wide,
        looping gravel drive at the front of the
        house and told you to wait in the car, but you got bored and wandered the grounds.
        You'd been afraid of
        getting in trouble and stopped at the place you
        stand now. This time you don't turn back.
      </p>
      <p>
        It seems perfectly normal that the <Examinable expansions={["urns", ["cracked urn ", "the newer urn"], "mismatched urns"]} tag="c1_urns" /> alongside
        the back stairs are radiating frustration.
      </p>
    </section>,
    <section>
      <p>
        <MapFromInventory from={inventory.c1_urns}
          to={ {
            "": "The cracked urn is empty, but the newer urn ",
            "urn": "The newer urn"
          }}
        /> contains the metal tool that Whitby tossed to you. It contains a curved blade
        in a round slot about the size of a quarter, with a safety cover—a cigar cutter, you
        realize. As before with the glove,
        it stands out as more real than anything around you. You can read the emotion
        radiating from it as clearly as you could read a person's face.
      </p>
      <p>
        Where the glove felt angry—murderous even—the cigar cutter is frustrated.
        It had a single task and that job went unfinished when Healey, interrupted in his
        room, was killed. It's a simple device but a very personal one, and
        you can sense another emotion welling up from within it: a profound sense of loss.
      </p>
      <p>
        Its sadness is blossoming, somehow, leaking out of the cutter
        and seeping into the urn, into the fissures of
        the stone fence and spilling onto the ground in a torrent. You watch as the entire courtyard seems to blaze up
        in an paroxyism of grief.
      </p>
      <p>
        It stops suddenly at the base of the stairs, by a shrub planted along the
        path. The pool of grief has encountered a conflicting spasm of
        hatred. The intensely negative emotion is unfocused but familiar.
      </p>
      <p>The sun is rising in the sky now, and without warning police officers
        appear from around the sides of the house, the first responders to a
        potential crime scene. They're wading through the grief, completely
        unaware, and you can feel the vast separation between the animate and
        inanimate world.
      </p>
      <p>The police suddenly flock indoors—someone must've found the body—
        and the grief begins to collapse, draining like a film run backwards
        until it pools back into  <Examinable expansions={["the device", "Healey's cigar cutter"]} tag="c1_cutter"/>.
      </p>
    </section>,
    <section>
        <h3>At the diner</h3>
      <p>
        Everyone is staring at you.
      </p>
      <p>
        "He's all right," Whitby says to the room. She's slapping your hand, the one clutching the cigar
        cutter. Her hand feels firey hot but it's just because you're so cold.
      </p>
      <p>"What did I do?" you whisper, and try to sit up straight.</p>
      <p>"You went pale. Then you slumped over." You see that your coffee is
      overturned and there's a pile of sopping wet napkins bundled up by the salt shaker.</p>
      <p>"Sorry," you mutter. Patrons in the diner have resumed pretending not to notice you.
        You weigh the cigar cutter in your hand and fix the detective with your best
        psychic stare. "You found <Examinable expansions={["this cigar cutter", "Healey's cigar cutter", "Healey's cigar cutter, in an urn", "Healey's cigar cutter, in an urn, dropped by the killer"]} tag="c1_face" /> behind
        the house," you <MapFromInventory from={inventory.c1_face}
          to={{
            undefined: "say",
            cutter: "assert",
            urn: "insist"
          }} />.

        Her face is <MapFromInventory from={inventory.c1_face}
          to={{
            undefined: "expressionless",
            cutter: "twitching a little",
            urn: "a swirl of conflicting emotions"
          }} />.
      </p>
      </section>,
      <section>
      <p>"Yes," she says, finally.</p>
      <p>"He was using it right before he died."</p>
      <p>"We think so. He smoked outside, but kept his cigars in the study. We found
      one unwrapped, but uncut." She pauses and lowers her voice. "Where were you? Just now?"</p>
      <p>"Behind his house. This was in the urn. I saw the police arrive, the morning of
        Healey's death." You hesitate to tell her the rest, but in for a penny, in for a pound. "The cigar cutter... misses him."
      </p>
      <p>"It what?"</p>
      <p>Your palms are sweaty but all the
        napkins were used to mop up your coffee. You wipe them on your pants instead.
        "I don't think it's just any object that I can... connect with. They have to be
        invested in what happened."
      </p>
      <p>"Invested," she repeats. It's not a question.</p>
      <p>"Let me see that glove again."</p>
      <p>She produces it reluctantly. As you expected, it's no longer suffused with
        rage or vengeance or any emotion at all. "When I first held this," you explain,
        "it was like being in the room with the angriest person you've ever met. Someone
        so blinded by fury that they wanted no other outcome but violence."
      </p>
      <p>Her eyebrow is spectacularly arched. "The glove. Was angry."</p>
      <p>"And this cigar knife," you press on, "wanted nothing more than to cut one more cigar.
        It misses him, terribly."
      </p>
      <p>"Right now? This glove <em>misses</em> him?"</p>
      <p>"Not anymore. I think once they—show me what they're feeling, they're satisfied."</p>
      <p>She sits back and folds her arms. "Mr. Pietro, I can't tell, do you think I'm an idiot or a sucker? Maybe both?"</p>
      <p>"That glove," you point. "You only found one, didn't you?"
      </p>
      <p>
        "Yes."
      </p>
      <p>
        "Take me to the Healeys'. I know where the other one is."
      </p>
      <NextChapter chapter="2" />
      </section>
    ]
    return <RenderSection currentSection={currentSection} sections={sections} />
}

export const Chapter1 = connect(
  (state, ownProps) => ({
    currentSection: state.bookmarks[ownProps.chapterId],
    inventory: state.inventory
  })
)(_Chapter)
