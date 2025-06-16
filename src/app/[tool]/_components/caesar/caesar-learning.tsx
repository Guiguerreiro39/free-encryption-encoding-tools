"use static";

export const CaesarLearning = () => {
  return (
    <article className="space-y-4">
      <section>
        <h4 className="font-semibold mb-2">What is the Caesar Cipher?</h4>
        <p className="text-muted-foreground text-sm">
          The Caesar cipher is one of the simplest and oldest known encryption
          techniques. Named after Julius Caesar, who used it to send secret
          messages, it works by shifting each letter in the plaintext by a fixed
          number of positions down the alphabet.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-4">
        <div>
          <h5 className="font-semibold mb-2">Key Features:</h5>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>
              <strong className="font-semibold">Substitution Cipher:</strong>{" "}
              Replaces each letter with another based on a fixed shift.
            </li>
            <li>
              <strong className="font-semibold">Symmetric:</strong> Same key
              (shift value) used for both encryption and decryption.
            </li>
            <li>
              <strong className="font-semibold">Alphabet-Based:</strong> Works
              only on letters; does not change numbers or symbols.
            </li>
            <li>
              <strong className="font-semibold">Historical Importance:</strong>{" "}
              Often taught as a basic example of classical encryption.
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Common Uses:</h5>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Teaching basic cryptography concepts</li>
            <li>Simple puzzles and games</li>
            <li>Basic encoding in non-critical applications</li>
          </ul>
        </div>
      </section>

      <section>
        <h5 className="font-semibold mb-2">How the Caesar Cipher Works</h5>
        <p className="text-sm text-muted-foreground mb-2.5">
          To encrypt a message, each letter in the plaintext is shifted a
          certain number of places down the alphabet. For example, with a shift
          of 3:
        </p>
        <ul className="list-disc list-inside text-sm text-muted-foreground mb-2.5">
          <li>A → D</li>
          <li>B → E</li>
          <li>HELLO → KHOOR</li>
        </ul>
        <p className="text-sm text-muted-foreground mb-2.5">
          To decrypt, the process is reversed by shifting in the opposite
          direction.
        </p>
        <p className="text-sm text-muted-foreground">
          The Caesar cipher is a special case of the shift cipher, where the
          alphabet is rotated. It is not secure by modern standards, but useful
          for learning.
        </p>
      </section>

      <section>
        <h5 className="font-semibold mb-4">Security Analysis</h5>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2.5">
              <strong className="font-medium">Pros:</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Simple and easy to understand</li>
              <li>Good for educational purposes</li>
              <li>Quick to implement</li>
            </ul>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2.5">
              <strong className="font-medium">Cons:</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Very insecure — only 25 possible shifts</li>
              <li>Vulnerable to brute-force and frequency analysis attacks</li>
              <li>Only suitable for very simple contexts</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h5 className="font-semibold mb-4">Example Shifts</h5>
        <div className="overflow-auto rounded-lg border text-sm text-muted-foreground">
          <table className="w-full text-left border-collapse">
            <thead className="bg-muted text-muted-foreground">
              <tr>
                <th className="p-2 border-b font-semibold">Shift</th>
                <th className="p-2 border-b font-semibold">Plaintext</th>
                <th className="p-2 border-b font-semibold">Ciphertext</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b">+1</td>
                <td className="p-2 border-b">HELLO</td>
                <td className="p-2 border-b">IFMMP</td>
              </tr>
              <tr>
                <td className="p-2 border-b">+3</td>
                <td className="p-2 border-b">HELLO</td>
                <td className="p-2 border-b">KHOOR</td>
              </tr>
              <tr>
                <td className="p-2 border-b">+13</td>
                <td className="p-2 border-b">HELLO</td>
                <td className="p-2 border-b">URYYB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </article>
  );
};
